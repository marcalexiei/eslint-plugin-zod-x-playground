import * as z from 'zod/mini';

z.string();

z.any();

z.string().check(z.describe('asd'));

z.string().check(z.meta({ description: 'asd' }));

z.custom(() => true, { error: 'asd' });

z.string().brand();
