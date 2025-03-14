import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUnique_personCompoundUniqueInput> = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    record_id: z.string(),
    author_id: z.string(),
    resource_id: z.string(),
  })
  .strict();

export const PersonUnique_personCompoundUniqueInputObjectSchema = Schema;
