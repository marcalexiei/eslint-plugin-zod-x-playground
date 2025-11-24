import * as z from 'zod';

z.refine(
  () => {
    throw Error('ciao');
  },
  { error: 'err' },
);
