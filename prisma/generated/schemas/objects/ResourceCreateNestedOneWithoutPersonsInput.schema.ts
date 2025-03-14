import { z } from 'zod';
import { ResourceCreateWithoutPersonsInputObjectSchema } from './ResourceCreateWithoutPersonsInput.schema';
import { ResourceUncheckedCreateWithoutPersonsInputObjectSchema } from './ResourceUncheckedCreateWithoutPersonsInput.schema';
import { ResourceCreateOrConnectWithoutPersonsInputObjectSchema } from './ResourceCreateOrConnectWithoutPersonsInput.schema';
import { ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutPersonsInput> = z
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
    connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResourceCreateNestedOneWithoutPersonsInputObjectSchema = Schema;
