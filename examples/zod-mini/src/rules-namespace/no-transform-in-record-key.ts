import * as z from 'zod/mini';

z.record(z.string().check(z.trim()), z.string());
