import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    url: z.literal(true).optional(),
    is_blacklisted: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ResourceCountAggregateInputObjectSchema = Schema;
