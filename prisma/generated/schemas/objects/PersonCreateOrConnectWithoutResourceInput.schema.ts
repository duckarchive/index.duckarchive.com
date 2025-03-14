import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutResourceInputObjectSchema } from './PersonCreateWithoutResourceInput.schema';
import { PersonUncheckedCreateWithoutResourceInputObjectSchema } from './PersonUncheckedCreateWithoutResourceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutResourceInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutResourceInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutResourceInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutResourceInputObjectSchema = Schema;
