import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceUncheckedCreateWithoutPersonsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    url: z.string().optional().nullable(),
    is_blacklisted: z.boolean().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const ResourceUncheckedCreateWithoutPersonsInputObjectSchema = Schema;
