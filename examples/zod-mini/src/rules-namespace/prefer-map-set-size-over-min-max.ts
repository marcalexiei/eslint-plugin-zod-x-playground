import * as z from 'zod/mini';

z.set(z.string()).check(z.minSize(3), z.maxSize(3));
