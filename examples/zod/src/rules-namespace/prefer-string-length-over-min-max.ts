import * as z from 'zod';

z.string().trim().min(3).max(3);
