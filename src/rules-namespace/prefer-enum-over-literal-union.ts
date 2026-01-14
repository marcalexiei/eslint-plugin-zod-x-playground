import * as z from 'zod';

z.union([z.literal('foo'), z.literal('bar')]);
