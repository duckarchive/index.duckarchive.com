import { z } from 'zod';
import { FirstNameOrderByWithRelationInputObjectSchema } from './objects/FirstNameOrderByWithRelationInput.schema';
import { FirstNameWhereInputObjectSchema } from './objects/FirstNameWhereInput.schema';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';
import { FirstNameCountAggregateInputObjectSchema } from './objects/FirstNameCountAggregateInput.schema';
import { FirstNameMinAggregateInputObjectSchema } from './objects/FirstNameMinAggregateInput.schema';
import { FirstNameMaxAggregateInputObjectSchema } from './objects/FirstNameMaxAggregateInput.schema';

export const FirstNameAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), FirstNameCountAggregateInputObjectSchema])
    .optional(),
  _min: FirstNameMinAggregateInputObjectSchema.optional(),
  _max: FirstNameMaxAggregateInputObjectSchema.optional(),
});
