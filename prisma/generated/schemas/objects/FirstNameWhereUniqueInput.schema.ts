import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameWhereUniqueInput> = z
  .object({
    name: z.string().optional(),
  })
  .strict();

export const FirstNameWhereUniqueInputObjectSchema = Schema;
