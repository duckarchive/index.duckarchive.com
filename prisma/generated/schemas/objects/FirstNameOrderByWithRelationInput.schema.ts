import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameOrderByWithRelationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    normalized_name: z.lazy(() => SortOrderSchema).optional(),
    is_male: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FirstNameOrderByWithRelationInputObjectSchema = Schema;
