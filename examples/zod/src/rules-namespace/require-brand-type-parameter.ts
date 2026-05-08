import * as z from 'zod';

z.string().trim().min(1).brand();
z.string().trim().min(1).brand().max(2);
