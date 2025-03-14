import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPersonsInputObjectSchema } from './UserCreateWithoutPersonsInput.schema';
import { UserUncheckedCreateWithoutPersonsInputObjectSchema } from './UserUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPersonsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPersonsInputObjectSchema = Schema;
