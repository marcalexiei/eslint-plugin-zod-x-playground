import { z } from "zod";

const prova = z.string().array();

console.info(prova);

z.refine(() => {
  throw Error("ciao");
});

z.any();

z.string().describe("desc").trim();

z.string().min(5).meta({ foo: "bar" }).max(10);
