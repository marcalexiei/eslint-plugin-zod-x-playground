import * as z from 'zod';

z.string().trim().min(5).max(2);
