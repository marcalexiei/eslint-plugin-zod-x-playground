import * as z from 'zod';

z.union([z.literal('foo'), z.literal('bar')]).optional();

z.looseObject({
  modifiedTime: z.string().trim().optional(),
  size: z.union([z.literal('foo'), z.literal('bar')]),
});

z.looseObject({
  modifiedTime: z.string().trim().optional(),
  // should not error
  size: z.union([z.string().trim(), z.number()]).optional(),
});
