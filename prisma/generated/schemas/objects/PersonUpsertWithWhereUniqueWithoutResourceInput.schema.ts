import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutResourceInputObjectSchema } from './PersonUpdateWithoutResourceInput.schema';
import { PersonUncheckedUpdateWithoutResourceInputObjectSchema } from './PersonUncheckedUpdateWithoutResourceInput.schema';
import { PersonCreateWithoutResourceInputObjectSchema } from './PersonCreateWithoutResourceInput.schema';
import { PersonUncheckedCreateWithoutResourceInputObjectSchema } from './PersonUncheckedCreateWithoutResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutResourceInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonUpdateWithoutResourceInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutResourceInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonCreateWithoutResourceInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutResourceInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpsertWithWhereUniqueWithoutResourceInputObjectSchema =
  Schema;
