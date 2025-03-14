import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { PersonCreateNestedManyWithoutAuthorInputObjectSchema } from './PersonCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    is_blacklisted: z.boolean().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
