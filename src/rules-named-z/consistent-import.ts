import z3 from 'zod/v3'; // Error: Import zod with a named import
import z from 'zod/v4'; // Error: Import zod with a named import
import { z as zNamed } from 'zod';

z.object();
z3.object({});
zNamed.object();
