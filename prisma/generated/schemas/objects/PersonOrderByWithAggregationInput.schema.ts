import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PersonCountOrderByAggregateInputObjectSchema } from './PersonCountOrderByAggregateInput.schema';
import { PersonAvgOrderByAggregateInputObjectSchema } from './PersonAvgOrderByAggregateInput.schema';
import { PersonMaxOrderByAggregateInputObjectSchema } from './PersonMaxOrderByAggregateInput.schema';
import { PersonMinOrderByAggregateInputObjectSchema } from './PersonMinOrderByAggregateInput.schema';
import { PersonSumOrderByAggregateInputObjectSchema } from './PersonSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z
  .object({
    first_name: z.lazy(() => SortOrderSchema).optional(),
    first_name_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    last_name: z.lazy(() => SortOrderSchema).optional(),
    last_name_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    middle_name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    father_name_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_male: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    birth_date: z.lazy(() => SortOrderSchema).optional(),
    is_birth_date_approx: z.lazy(() => SortOrderSchema).optional(),
    birth_date_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    birth_place: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    birth_place_lat: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    birth_place_lon: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    record_id: z.lazy(() => SortOrderSchema).optional(),
    record_date: z.lazy(() => SortOrderSchema).optional(),
    is_record_date_approx: z.lazy(() => SortOrderSchema).optional(),
    record_date_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    record_place: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    record_place_lat: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    record_place_lon: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    record_type: z.lazy(() => SortOrderSchema).optional(),
    record_type_normalized: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    archive: z.lazy(() => SortOrderSchema).optional(),
    fund: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    case: z.lazy(() => SortOrderSchema).optional(),
    page: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    note: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    author_id: z.lazy(() => SortOrderSchema).optional(),
    resource_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PersonAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PersonMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PersonMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PersonSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PersonOrderByWithAggregationInputObjectSchema = Schema;
