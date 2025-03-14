import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FirstNameCountOrderByAggregateInputObjectSchema } from './FirstNameCountOrderByAggregateInput.schema';
import { FirstNameMaxOrderByAggregateInputObjectSchema } from './FirstNameMaxOrderByAggregateInput.schema';
import { FirstNameMinOrderByAggregateInputObjectSchema } from './FirstNameMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameOrderByWithAggregationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    normalized_name: z.lazy(() => SortOrderSchema).optional(),
    is_male: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FirstNameCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FirstNameMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FirstNameMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FirstNameOrderByWithAggregationInputObjectSchema = Schema;
