import z3 from 'zod/v3'; // Error: Import zod with a namespace import
import z from 'zod/v4'; // Error: Import zod with a namespace import

z.string();
z3.string();
