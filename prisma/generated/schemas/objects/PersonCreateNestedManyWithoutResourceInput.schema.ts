import { z } from 'zod';
import { PersonCreateWithoutResourceInputObjectSchema } from './PersonCreateWithoutResourceInput.schema';
import { PersonUncheckedCreateWithoutResourceInputObjectSchema } from './PersonUncheckedCreateWithoutResourceInput.schema';
import { PersonCreateOrConnectWithoutResourceInputObjectSchema } from './PersonCreateOrConnectWithoutResourceInput.schema';
import { PersonCreateManyResourceInputEnvelopeObjectSchema } from './PersonCreateManyResourceInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateNestedManyWithoutResourceInput> = z
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
    createMany: z
      .lazy(() => PersonCreateManyResourceInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PersonWhereUniqueInputObjectSchema),
        z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PersonCreateNestedManyWithoutResourceInputObjectSchema = Schema;
