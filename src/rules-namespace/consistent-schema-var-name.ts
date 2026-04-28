import * as z from 'zod';

const test = z.string().trim();
test.safeParse('ciao');
