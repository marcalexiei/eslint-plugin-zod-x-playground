import * as z from 'zod';

z.string().trim().optional().default('Hello World');
