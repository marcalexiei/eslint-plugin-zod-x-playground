import * as z from 'zod/mini';

z.array(z.string()).check(z.length(3));
