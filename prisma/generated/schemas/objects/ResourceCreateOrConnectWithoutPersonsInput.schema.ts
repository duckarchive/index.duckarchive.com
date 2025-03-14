import { z } from 'zod';
import { ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceCreateWithoutPersonsInputObjectSchema } from './ResourceCreateWithoutPersonsInput.schema';
import { ResourceUncheckedCreateWithoutPersonsInputObjectSchema } from './ResourceUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutPersonsInput> = z
  .object({
    where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResourceCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => ResourceUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const ResourceCreateOrConnectWithoutPersonsInputObjectSchema = Schema;
