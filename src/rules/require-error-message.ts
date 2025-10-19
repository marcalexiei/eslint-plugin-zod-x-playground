import * as z from 'zod';

z.string().refine(() => true, { error: 'err' });
z.string().refine(() => true);
z.string().refine(() => true, { abort: true });

z.custom((v) => typeof v === 'string', { error: 'ciao' });
z.custom((v) => typeof v === 'string');
z.custom((v) => typeof v === 'string', { abort: true });
