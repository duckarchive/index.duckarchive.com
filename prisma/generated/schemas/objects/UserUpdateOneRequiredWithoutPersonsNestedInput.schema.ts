import { z } from 'zod';
import { UserCreateWithoutPersonsInputObjectSchema } from './UserCreateWithoutPersonsInput.schema';
import { UserUncheckedCreateWithoutPersonsInputObjectSchema } from './UserUncheckedCreateWithoutPersonsInput.schema';
import { UserCreateOrConnectWithoutPersonsInputObjectSchema } from './UserCreateOrConnectWithoutPersonsInput.schema';
import { UserUpsertWithoutPersonsInputObjectSchema } from './UserUpsertWithoutPersonsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPersonsInputObjectSchema } from './UserUpdateWithoutPersonsInput.schema';
import { UserUncheckedUpdateWithoutPersonsInputObjectSchema } from './UserUncheckedUpdateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPersonsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPersonsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPersonsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPersonsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPersonsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPersonsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPersonsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPersonsNestedInputObjectSchema =
  Schema;
