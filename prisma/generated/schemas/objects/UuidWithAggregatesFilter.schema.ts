import { z } from 'zod';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidWithAggregatesFilterObjectSchema } from './NestedUuidWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z
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
      .union([
        z.string(),
        z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  })
  .strict();

export const UuidWithAggregatesFilterObjectSchema = Schema;
