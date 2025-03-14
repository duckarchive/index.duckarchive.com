import { z } from 'zod';
import { PersonUnique_personCompoundUniqueInputObjectSchema } from './PersonUnique_personCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonWhereUniqueInput> = z
  .object({
    unique_person: z
      .lazy(() => PersonUnique_personCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonWhereUniqueInputObjectSchema = Schema;
