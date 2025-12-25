import * as z from 'zod';

z.any();

export const aSchema = z.any().refine((value) => value, 'error');
