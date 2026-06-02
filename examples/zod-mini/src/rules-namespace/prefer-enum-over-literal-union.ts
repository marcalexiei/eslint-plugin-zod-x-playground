import * as z from 'zod/mini';

z.union([z.literal('foo'), z.literal('bar')]);
