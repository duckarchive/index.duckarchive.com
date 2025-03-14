import { z } from 'zod';
import { PersonCreateWithoutAuthorInputObjectSchema } from './PersonCreateWithoutAuthorInput.schema';
import { PersonUncheckedCreateWithoutAuthorInputObjectSchema } from './PersonUncheckedCreateWithoutAuthorInput.schema';
import { PersonCreateOrConnectWithoutAuthorInputObjectSchema } from './PersonCreateOrConnectWithoutAuthorInput.schema';
import { PersonCreateManyAuthorInputEnvelopeObjectSchema } from './PersonCreateManyAuthorInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateNestedManyWithoutAuthorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => PersonCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => PersonUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => PersonUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PersonCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => PersonCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PersonCreateManyAuthorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema =
  Schema;
