import * as z from 'zod/mini';

z.string().check(z.minLength(3), z.maxLength(3));
