import * as z from 'zod';

z.custom<number>();

z.custom<number>((v) => typeof v === 'number', 'asd');
