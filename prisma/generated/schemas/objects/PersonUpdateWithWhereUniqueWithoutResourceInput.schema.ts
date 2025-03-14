import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutResourceInputObjectSchema } from './PersonUpdateWithoutResourceInput.schema';
import { PersonUncheckedUpdateWithoutResourceInputObjectSchema } from './PersonUncheckedUpdateWithoutResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutResourceInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateWithoutResourceInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutResourceInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateWithWhereUniqueWithoutResourceInputObjectSchema =
  Schema;
