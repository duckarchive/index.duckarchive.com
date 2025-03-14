import { z } from 'zod';
import { ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceRelationFilter> = z
  .object({
    is: z
      .lazy(() => ResourceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ResourceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ResourceRelationFilterObjectSchema = Schema;
