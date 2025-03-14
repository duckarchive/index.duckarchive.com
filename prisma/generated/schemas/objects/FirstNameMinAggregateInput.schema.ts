import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameMinAggregateInputType> = z
  .object({
    name: z.literal(true).optional(),
    normalized_name: z.literal(true).optional(),
    is_male: z.literal(true).optional(),
  })
  .strict();

export const FirstNameMinAggregateInputObjectSchema = Schema;
