import * as z from 'zod';

z.looseObject({});
z.strictObject({});

z.object({ test: z.looseObject({}) });
