import { z } from 'zod';
import { UserUpdateWithoutPersonsInputObjectSchema } from './UserUpdateWithoutPersonsInput.schema';
import { UserUncheckedUpdateWithoutPersonsInputObjectSchema } from './UserUncheckedUpdateWithoutPersonsInput.schema';
import { UserCreateWithoutPersonsInputObjectSchema } from './UserCreateWithoutPersonsInput.schema';
import { UserUncheckedCreateWithoutPersonsInputObjectSchema } from './UserUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPersonsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPersonsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPersonsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPersonsInputObjectSchema = Schema;
