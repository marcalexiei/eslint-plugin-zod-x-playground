import * as z from 'zod';

z.string().meta({ description: 'desc' }).trim();

export const baseEventPayloadSchema = z
  .looseObject({
    type: z.string().trim(),
    action: z.string().trim().meta({ description: 'a' }),
  })
  .meta();

export const b2aseEventPayloadSchema = z.strictObject({
  type: z.string().trim(),
  action: z.string().trim().meta({ description: 'a' }).min(1),
});
