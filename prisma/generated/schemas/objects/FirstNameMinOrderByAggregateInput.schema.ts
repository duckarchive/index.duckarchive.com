import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameMinOrderByAggregateInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    normalized_name: z.lazy(() => SortOrderSchema).optional(),
    is_male: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FirstNameMinOrderByAggregateInputObjectSchema = Schema;
