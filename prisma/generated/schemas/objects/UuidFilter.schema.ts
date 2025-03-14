import { z } from 'zod';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidFilterObjectSchema } from './NestedUuidFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)])
      .optional(),
  })
  .strict();

export const UuidFilterObjectSchema = Schema;
