import * as z from 'zod/mini';

z.string().check(z.describe('desc'));
