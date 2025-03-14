import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FirstNameWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FirstNameWhereInputObjectSchema),
        z.lazy(() => FirstNameWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FirstNameWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FirstNameWhereInputObjectSchema),
        z.lazy(() => FirstNameWhereInputObjectSchema).array(),
      ])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    normalized_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    is_male: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();

export const FirstNameWhereInputObjectSchema = Schema;
