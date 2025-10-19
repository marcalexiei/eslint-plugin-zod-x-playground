import * as z from 'zod';

const test = z.string();
test.safeParse('ciao');
