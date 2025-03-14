import { z } from 'zod';
import { PersonCreateManyResourceInputObjectSchema } from './PersonCreateManyResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyResourceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PersonCreateManyResourceInputObjectSchema),
      z.lazy(() => PersonCreateManyResourceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PersonCreateManyResourceInputEnvelopeObjectSchema = Schema;
