import { z } from 'zod';
import { PersonUncheckedCreateNestedManyWithoutResourceInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    url: z.string().optional().nullable(),
    is_blacklisted: z.boolean().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
    persons: z
      .lazy(
        () => PersonUncheckedCreateNestedManyWithoutResourceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ResourceUncheckedCreateInputObjectSchema = Schema;
