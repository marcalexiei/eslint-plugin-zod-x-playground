import * as z from 'zod';

z.object().refine(() => true, { error: 'err' });
z.object().refine(() => true);
z.object().refine(() => true, { abort: true });

z.custom((v) => typeof v === 'string', { error: 'ciao' });
z.custom((v) => typeof v === 'string');
z.custom((v) => typeof v === 'string', { abort: true });
