import { z } from 'zod';
import { UserCreateWithoutPersonsInputObjectSchema } from './UserCreateWithoutPersonsInput.schema';
import { UserUncheckedCreateWithoutPersonsInputObjectSchema } from './UserUncheckedCreateWithoutPersonsInput.schema';
import { UserCreateOrConnectWithoutPersonsInputObjectSchema } from './UserCreateOrConnectWithoutPersonsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPersonsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPersonsInputObjectSchema = Schema;
