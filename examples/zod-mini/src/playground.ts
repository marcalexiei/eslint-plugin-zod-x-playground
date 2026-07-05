import * as z from 'zod/mini';

const aSchema = z.coerce.boolean();
console.info(aSchema);
