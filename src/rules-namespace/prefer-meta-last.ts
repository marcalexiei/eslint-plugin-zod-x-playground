import * as z from 'zod';

z.string().meta({ description: 'desc' }).trim();

export const baseEventPayloadSchema = z
  .looseObject({
    type: z.string(),
    action: z.string().meta({ description: 'a' }),
  })
  .meta();

export const b2aseEventPayloadSchema = z.strictObject({
  type: z.string(),
  action: z.string().meta({ description: 'a' }).min(1),
});
