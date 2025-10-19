import { initTRPC, TRPCError } from '@trpc/server';
import { experimental_nextAppDirCaller } from '@trpc/server/adapters/next-app-dir';
import { getServerSession } from 'next-auth';
import SuperJSON from 'superjson';
import * as z from 'zod';

export const createTRPCContext = async () => {
  const session = await getServerSession();
  return { session };
};

interface Meta {
  span: string;
}

z.string().min(5).meta({ a: 1 }).max(10);

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC
  .meta<Meta>() ///////////////////////////////////////// Matching HERE
  .context<typeof createTRPCContext>()
  .create({
    errorFormatter({ error, shape }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
    transformer: SuperJSON,
  });

export const serverActionProcedure = t.procedure.experimental_caller(
  experimental_nextAppDirCaller({
    createContext: createTRPCContext,
    pathExtractor: ({ meta }) => (meta as Meta).span,
  }),
);

export const protectedAction = serverActionProcedure.use((opts) => {
  if (!opts.ctx.session) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }

  return opts.next({
    ctx: {
      ...opts.ctx,
      session: opts.ctx.session,
    },
  });
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
