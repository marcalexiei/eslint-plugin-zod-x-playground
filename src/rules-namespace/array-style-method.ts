import * as z from 'zod';

export const Schema = z.object({
  items: z.array(z.string()).optional(),
});
