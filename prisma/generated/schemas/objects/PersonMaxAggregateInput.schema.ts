import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonMaxAggregateInputType> = z
  .object({
    first_name: z.literal(true).optional(),
    first_name_normalized: z.literal(true).optional(),
    last_name: z.literal(true).optional(),
    last_name_normalized: z.literal(true).optional(),
    middle_name: z.literal(true).optional(),
    father_name_normalized: z.literal(true).optional(),
    is_male: z.literal(true).optional(),
    birth_date: z.literal(true).optional(),
    is_birth_date_approx: z.literal(true).optional(),
    birth_date_normalized: z.literal(true).optional(),
    birth_place: z.literal(true).optional(),
    birth_place_lat: z.literal(true).optional(),
    birth_place_lon: z.literal(true).optional(),
    record_id: z.literal(true).optional(),
    record_date: z.literal(true).optional(),
    is_record_date_approx: z.literal(true).optional(),
    record_date_normalized: z.literal(true).optional(),
    record_place: z.literal(true).optional(),
    record_place_lat: z.literal(true).optional(),
    record_place_lon: z.literal(true).optional(),
    record_type: z.literal(true).optional(),
    record_type_normalized: z.literal(true).optional(),
    archive: z.literal(true).optional(),
    fund: z.literal(true).optional(),
    description: z.literal(true).optional(),
    case: z.literal(true).optional(),
    page: z.literal(true).optional(),
    note: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    author_id: z.literal(true).optional(),
    resource_id: z.literal(true).optional(),
  })
  .strict();

export const PersonMaxAggregateInputObjectSchema = Schema;
