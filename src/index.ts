import z from 'zod';

// ================

const provaSchema = z.string().array();

console.info(provaSchema);

// ================

z.refine(() => {
  throw Error('ciao');
});

// ================

z.any();

// ================

z.string().trim().describe('desc');

z.string().meta({ foo: 'bar' }).min(5).max(10);

// ================

z.custom<number>();

z.custom<number>((v) => typeof v === 'number', 'asd');

// ================

const test = z.string();
test.safeParse('ciao');

// ================
