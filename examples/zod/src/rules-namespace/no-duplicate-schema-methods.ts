import * as z from 'zod';

z.string().trim().min(1).max(5).trim();

z.string().min(1).max(10).min(5);

z.string().optional().optional();
