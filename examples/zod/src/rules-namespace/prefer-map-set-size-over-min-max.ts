import * as z from 'zod';

z.set(z.string().trim()).min(3).max(3);
