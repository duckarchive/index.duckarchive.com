import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonScalarWhereInputObjectSchema),
        z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonScalarWhereInputObjectSchema),
        z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    first_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    first_name_normalized: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    last_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    last_name_normalized: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    middle_name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    father_name_normalized: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    is_male: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    birth_date: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    is_birth_date_approx: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    birth_date_normalized: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    birth_place: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    birth_place_lat: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    birth_place_lon: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    record_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    record_date: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    is_record_date_approx: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    record_date_normalized: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    record_place: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    record_place_lat: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    record_place_lon: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    record_type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    record_type_normalized: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    archive: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fund: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    case: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    page: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    author_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    resource_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PersonScalarWhereInputObjectSchema = Schema;
