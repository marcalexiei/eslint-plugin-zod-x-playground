import * as z from 'zod/mini';

export const aSchema = z.string();

export type SchemaType = z.infer<typeof aSchema>;
