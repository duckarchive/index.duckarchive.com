import { z } from 'zod';
import { PersonCreateWithoutAuthorInputObjectSchema } from './PersonCreateWithoutAuthorInput.schema';
import { PersonUncheckedCreateWithoutAuthorInputObjectSchema } from './PersonUncheckedCreateWithoutAuthorInput.schema';
import { PersonCreateOrConnectWithoutAuthorInputObjectSchema } from './PersonCreateOrConnectWithoutAuthorInput.schema';
import { PersonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { PersonCreateManyAuthorInputEnvelopeObjectSchema } from './PersonCreateManyAuthorInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { PersonUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './PersonUpdateManyWithWhereWithoutAuthorInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithoutAuthorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PersonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PersonUpsertWithWhereUniqueWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PersonCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PersonWhereUniqueInputObjectSchema),
        z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PersonWhereUniqueInputObjectSchema),
        z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PersonWhereUniqueInputObjectSchema),
        z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PersonWhereUniqueInputObjectSchema),
        z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PersonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PersonUpdateWithWhereUniqueWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PersonUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        z
          .lazy(() => PersonUpdateManyWithWhereWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PersonScalarWhereInputObjectSchema),
        z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PersonUpdateManyWithoutAuthorNestedInputObjectSchema = Schema;
