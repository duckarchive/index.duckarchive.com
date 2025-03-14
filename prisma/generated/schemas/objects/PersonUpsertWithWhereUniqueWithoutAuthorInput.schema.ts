import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutAuthorInputObjectSchema } from './PersonUpdateWithoutAuthorInput.schema';
import { PersonUncheckedUpdateWithoutAuthorInputObjectSchema } from './PersonUncheckedUpdateWithoutAuthorInput.schema';
import { PersonCreateWithoutAuthorInputObjectSchema } from './PersonCreateWithoutAuthorInput.schema';
import { PersonUncheckedCreateWithoutAuthorInputObjectSchema } from './PersonUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = Schema;
