import * as z from 'zod';

z.number().int();
z.number().min(1).int();
z.number().min(1).int().max(2);
