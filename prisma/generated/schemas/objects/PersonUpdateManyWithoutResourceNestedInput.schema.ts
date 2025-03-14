import { z } from 'zod';
import { PersonCreateWithoutResourceInputObjectSchema } from './PersonCreateWithoutResourceInput.schema';
import { PersonUncheckedCreateWithoutResourceInputObjectSchema } from './PersonUncheckedCreateWithoutResourceInput.schema';
import { PersonCreateOrConnectWithoutResourceInputObjectSchema } from './PersonCreateOrConnectWithoutResourceInput.schema';
import { PersonUpsertWithWhereUniqueWithoutResourceInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutResourceInput.schema';
import { PersonCreateManyResourceInputEnvelopeObjectSchema } from './PersonCreateManyResourceInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutResourceInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutResourceInput.schema';
import { PersonUpdateManyWithWhereWithoutResourceInputObjectSchema } from './PersonUpdateManyWithWhereWithoutResourceInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithoutResourceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PersonCreateWithoutResourceInputObjectSchema),
        z.lazy(() => PersonCreateWithoutResourceInputObjectSchema).array(),
        z.lazy(() => PersonUncheckedCreateWithoutResourceInputObjectSchema),
        z
          .lazy(() => PersonUncheckedCreateWithoutResourceInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PersonCreateOrConnectWithoutResourceInputObjectSchema),
        z
          .lazy(() => PersonCreateOrConnectWithoutResourceInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PersonUpsertWithWhereUniqueWithoutResourceInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonUpsertWithWhereUniqueWithoutResourceInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PersonCreateManyResourceInputEnvelopeObjectSchema)
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
        z.lazy(
          () => PersonUpdateWithWhereUniqueWithoutResourceInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonUpdateWithWhereUniqueWithoutResourceInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PersonUpdateManyWithWhereWithoutResourceInputObjectSchema),
        z
          .lazy(() => PersonUpdateManyWithWhereWithoutResourceInputObjectSchema)
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

export const PersonUpdateManyWithoutResourceNestedInputObjectSchema = Schema;
