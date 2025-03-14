import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameCreateManyInput> = z
  .object({
    name: z.string(),
    normalized_name: z.string(),
    is_male: z.boolean(),
  })
  .strict();

export const FirstNameCreateManyInputObjectSchema = Schema;
