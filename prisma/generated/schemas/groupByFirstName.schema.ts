import { z } from 'zod';
import { FirstNameWhereInputObjectSchema } from './objects/FirstNameWhereInput.schema';
import { FirstNameOrderByWithAggregationInputObjectSchema } from './objects/FirstNameOrderByWithAggregationInput.schema';
import { FirstNameScalarWhereWithAggregatesInputObjectSchema } from './objects/FirstNameScalarWhereWithAggregatesInput.schema';
import { FirstNameScalarFieldEnumSchema } from './enums/FirstNameScalarFieldEnum.schema';

export const FirstNameGroupBySchema = z.object({
  where: FirstNameWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FirstNameOrderByWithAggregationInputObjectSchema,
      FirstNameOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FirstNameScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FirstNameScalarFieldEnumSchema),
});
