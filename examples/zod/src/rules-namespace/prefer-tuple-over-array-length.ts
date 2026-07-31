import * as z from 'zod';

z.array(z.string().trim()).length(3);
