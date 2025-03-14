import { z } from 'zod';
import { ResourceOrderByWithRelationInputObjectSchema } from './objects/ResourceOrderByWithRelationInput.schema';
import { ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceCountAggregateInputObjectSchema } from './objects/ResourceCountAggregateInput.schema';
import { ResourceMinAggregateInputObjectSchema } from './objects/ResourceMinAggregateInput.schema';
import { ResourceMaxAggregateInputObjectSchema } from './objects/ResourceMaxAggregateInput.schema';

export const ResourceAggregateSchema = z.object({
  orderBy: z
    .union([
      ResourceOrderByWithRelationInputObjectSchema,
      ResourceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ResourceWhereInputObjectSchema.optional(),
  cursor: ResourceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ResourceCountAggregateInputObjectSchema])
    .optional(),
  _min: ResourceMinAggregateInputObjectSchema.optional(),
  _max: ResourceMaxAggregateInputObjectSchema.optional(),
});
