import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonsInputObjectSchema } from './UserCreateNestedOneWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutResourceInput> = z
  .object({
    first_name: z.string(),
    first_name_normalized: z.string().optional().nullable(),
    last_name: z.string(),
    last_name_normalized: z.string().optional().nullable(),
    middle_name: z.string().optional().nullable(),
    father_name_normalized: z.string().optional().nullable(),
    is_male: z.boolean().optional().nullable(),
    birth_date: z.string(),
    is_birth_date_approx: z.boolean().optional(),
    birth_date_normalized: z.coerce.date().optional().nullable(),
    birth_place: z.string().optional().nullable(),
    birth_place_lat: z.number().optional().nullable(),
    birth_place_lon: z.number().optional().nullable(),
    record_id: z.string(),
    record_date: z.string(),
    is_record_date_approx: z.boolean().optional(),
    record_date_normalized: z.coerce.date().optional().nullable(),
    record_place: z.string().optional().nullable(),
    record_place_lat: z.number().optional().nullable(),
    record_place_lon: z.number().optional().nullable(),
    record_type: z.string(),
    record_type_normalized: z.string().optional().nullable(),
    archive: z.string(),
    fund: z.string(),
    description: z.string(),
    case: z.string(),
    page: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
    author: z.lazy(() => UserCreateNestedOneWithoutPersonsInputObjectSchema),
  })
  .strict();

export const PersonCreateWithoutResourceInputObjectSchema = Schema;
