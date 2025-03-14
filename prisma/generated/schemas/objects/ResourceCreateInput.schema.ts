import { z } from 'zod';
import { PersonCreateNestedManyWithoutResourceInputObjectSchema } from './PersonCreateNestedManyWithoutResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResourceCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    url: z.string().optional().nullable(),
    is_blacklisted: z.boolean().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutResourceInputObjectSchema)
      .optional(),
  })
  .strict();

export const ResourceCreateInputObjectSchema = Schema;
