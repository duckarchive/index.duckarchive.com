import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResourceCountOrderByAggregateInputObjectSchema } from './ResourceCountOrderByAggregateInput.schema';
import { ResourceMaxOrderByAggregateInputObjectSchema } from './ResourceMaxOrderByAggregateInput.schema';
import { ResourceMinOrderByAggregateInputObjectSchema } from './ResourceMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_blacklisted: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ResourceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ResourceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ResourceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ResourceOrderByWithAggregationInputObjectSchema = Schema;
