import * as z from 'zod/mini';

z.string().check(z.minLength(5), z.maxLength(2));
