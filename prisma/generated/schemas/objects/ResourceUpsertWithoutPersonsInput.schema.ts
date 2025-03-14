import { z } from 'zod';
import { ResourceUpdateWithoutPersonsInputObjectSchema } from './ResourceUpdateWithoutPersonsInput.schema';
import { ResourceUncheckedUpdateWithoutPersonsInputObjectSchema } from './ResourceUncheckedUpdateWithoutPersonsInput.schema';
import { ResourceCreateWithoutPersonsInputObjectSchema } from './ResourceCreateWithoutPersonsInput.schema';
import { ResourceUncheckedCreateWithoutPersonsInputObjectSchema } from './ResourceUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceUpsertWithoutPersonsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResourceUpdateWithoutPersonsInputObjectSchema),
      z.lazy(() => ResourceUncheckedUpdateWithoutPersonsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResourceCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => ResourceUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const ResourceUpsertWithoutPersonsInputObjectSchema = Schema;
