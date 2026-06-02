import * as z from 'zod/mini';

z.custom(() => true, { error: () => 'my error' });
