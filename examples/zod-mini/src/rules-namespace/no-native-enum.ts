import * as z from 'zod/mini';

enum Fruit {
  Apple = 'apple',
  Banana = 'banana',
}

z.nativeEnum(Fruit);
