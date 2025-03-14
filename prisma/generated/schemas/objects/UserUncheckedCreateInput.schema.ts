import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { PersonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    is_blacklisted: z.boolean().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional().nullable(),
    persons: z
      .lazy(() => PersonUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
