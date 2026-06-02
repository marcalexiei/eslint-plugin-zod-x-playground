import * as z from 'zod/mini';

const test = z.string();
test.parse('ciao');
