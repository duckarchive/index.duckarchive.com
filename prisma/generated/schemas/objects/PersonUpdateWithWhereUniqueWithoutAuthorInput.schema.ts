import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutAuthorInputObjectSchema } from './PersonUpdateWithoutAuthorInput.schema';
import { PersonUncheckedUpdateWithoutAuthorInputObjectSchema } from './PersonUncheckedUpdateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema;
