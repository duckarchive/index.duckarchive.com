import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonAvgAggregateInputType> = z
  .object({
    birth_place_lat: z.literal(true).optional(),
    birth_place_lon: z.literal(true).optional(),
    record_place_lat: z.literal(true).optional(),
    record_place_lon: z.literal(true).optional(),
  })
  .strict();

export const PersonAvgAggregateInputObjectSchema = Schema;
