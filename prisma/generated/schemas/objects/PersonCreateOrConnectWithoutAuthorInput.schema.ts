import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutAuthorInputObjectSchema } from './PersonCreateWithoutAuthorInput.schema';
import { PersonUncheckedCreateWithoutAuthorInputObjectSchema } from './PersonUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutAuthorInputObjectSchema = Schema;
