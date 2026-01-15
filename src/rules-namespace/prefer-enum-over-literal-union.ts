import * as z from 'zod';

z.union([z.literal('foo'), z.literal('bar')]);

z.looseObject({
  modifiedTime: z.string().optional(),
  // should not error
  size: z.union([z.string(), z.number()]).optional(),
});
