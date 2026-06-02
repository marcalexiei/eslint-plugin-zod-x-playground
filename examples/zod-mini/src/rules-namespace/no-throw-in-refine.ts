import * as z from 'zod/mini';

z.string().check(
  z.refine(() => {
    throw Error('ciao');
  }, 'err'),
);
