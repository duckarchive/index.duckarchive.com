import { z } from 'zod';
import { FirstNameOrderByWithRelationInputObjectSchema } from './objects/FirstNameOrderByWithRelationInput.schema';
import { FirstNameWhereInputObjectSchema } from './objects/FirstNameWhereInput.schema';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';
import { FirstNameScalarFieldEnumSchema } from './enums/FirstNameScalarFieldEnum.schema';

export const FirstNameFindFirstSchema = z.object({
  orderBy: z
    .union([
      FirstNameOrderByWithRelationInputObjectSchema,
      FirstNameOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FirstNameWhereInputObjectSchema.optional(),
  cursor: FirstNameWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FirstNameScalarFieldEnumSchema).optional(),
});
