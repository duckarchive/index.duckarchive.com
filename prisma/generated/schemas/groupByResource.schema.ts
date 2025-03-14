import { z } from 'zod';
import { ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';
import { ResourceOrderByWithAggregationInputObjectSchema } from './objects/ResourceOrderByWithAggregationInput.schema';
import { ResourceScalarWhereWithAggregatesInputObjectSchema } from './objects/ResourceScalarWhereWithAggregatesInput.schema';
import { ResourceScalarFieldEnumSchema } from './enums/ResourceScalarFieldEnum.schema';

export const ResourceGroupBySchema = z.object({
  where: ResourceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ResourceOrderByWithAggregationInputObjectSchema,
      ResourceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ResourceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ResourceScalarFieldEnumSchema),
});
