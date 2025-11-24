import * as z from 'zod';

z.custom(() => 'asd', `asd`);
z.custom(() => true, { error: () => 'my error' });
