import * as z from 'zod';

z.string().min(1).brand();
z.string().min(1).brand().max(2);
