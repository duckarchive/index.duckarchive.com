import { z } from 'zod';
import { ResourceCreateWithoutPersonsInputObjectSchema } from './ResourceCreateWithoutPersonsInput.schema';
import { ResourceUncheckedCreateWithoutPersonsInputObjectSchema } from './ResourceUncheckedCreateWithoutPersonsInput.schema';
import { ResourceCreateOrConnectWithoutPersonsInputObjectSchema } from './ResourceCreateOrConnectWithoutPersonsInput.schema';
import { ResourceUpsertWithoutPersonsInputObjectSchema } from './ResourceUpsertWithoutPersonsInput.schema';
import { ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateWithoutPersonsInputObjectSchema } from './ResourceUpdateWithoutPersonsInput.schema';
import { ResourceUncheckedUpdateWithoutPersonsInputObjectSchema } from './ResourceUncheckedUpdateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutPersonsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResourceCreateWithoutPersonsInputObjectSchema),
          z.lazy(() => ResourceUncheckedCreateWithoutPersonsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResourceCreateOrConnectWithoutPersonsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ResourceUpsertWithoutPersonsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResourceUpdateWithoutPersonsInputObjectSchema),
          z.lazy(() => ResourceUncheckedUpdateWithoutPersonsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResourceUpdateOneRequiredWithoutPersonsNestedInputObjectSchema =
  Schema;
