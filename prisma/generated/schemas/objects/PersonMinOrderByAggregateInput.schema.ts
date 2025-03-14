import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z
  .object({
    first_name: z.lazy(() => SortOrderSchema).optional(),
    first_name_normalized: z.lazy(() => SortOrderSchema).optional(),
    last_name: z.lazy(() => SortOrderSchema).optional(),
    last_name_normalized: z.lazy(() => SortOrderSchema).optional(),
    middle_name: z.lazy(() => SortOrderSchema).optional(),
    father_name_normalized: z.lazy(() => SortOrderSchema).optional(),
    is_male: z.lazy(() => SortOrderSchema).optional(),
    birth_date: z.lazy(() => SortOrderSchema).optional(),
    is_birth_date_approx: z.lazy(() => SortOrderSchema).optional(),
    birth_date_normalized: z.lazy(() => SortOrderSchema).optional(),
    birth_place: z.lazy(() => SortOrderSchema).optional(),
    birth_place_lat: z.lazy(() => SortOrderSchema).optional(),
    birth_place_lon: z.lazy(() => SortOrderSchema).optional(),
    record_id: z.lazy(() => SortOrderSchema).optional(),
    record_date: z.lazy(() => SortOrderSchema).optional(),
    is_record_date_approx: z.lazy(() => SortOrderSchema).optional(),
    record_date_normalized: z.lazy(() => SortOrderSchema).optional(),
    record_place: z.lazy(() => SortOrderSchema).optional(),
    record_place_lat: z.lazy(() => SortOrderSchema).optional(),
    record_place_lon: z.lazy(() => SortOrderSchema).optional(),
    record_type: z.lazy(() => SortOrderSchema).optional(),
    record_type_normalized: z.lazy(() => SortOrderSchema).optional(),
    archive: z.lazy(() => SortOrderSchema).optional(),
    fund: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    case: z.lazy(() => SortOrderSchema).optional(),
    page: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    author_id: z.lazy(() => SortOrderSchema).optional(),
    resource_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PersonMinOrderByAggregateInputObjectSchema = Schema;
