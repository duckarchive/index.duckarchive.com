import { z } from 'zod';
import { PersonCreateManyAuthorInputObjectSchema } from './PersonCreateManyAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PersonCreateManyAuthorInputObjectSchema),
      z.lazy(() => PersonCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PersonCreateManyAuthorInputEnvelopeObjectSchema = Schema;
