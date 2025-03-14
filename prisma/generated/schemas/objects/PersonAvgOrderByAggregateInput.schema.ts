import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonAvgOrderByAggregateInput> = z
  .object({
    birth_place_lat: z.lazy(() => SortOrderSchema).optional(),
    birth_place_lon: z.lazy(() => SortOrderSchema).optional(),
    record_place_lat: z.lazy(() => SortOrderSchema).optional(),
    record_place_lon: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PersonAvgOrderByAggregateInputObjectSchema = Schema;
