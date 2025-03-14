import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedUuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)])
      .optional(),
  })
  .strict();

export const NestedUuidFilterObjectSchema = Schema;
