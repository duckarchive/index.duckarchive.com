import { z } from 'zod';
import { ResourceOrderByWithRelationInputObjectSchema } from './objects/ResourceOrderByWithRelationInput.schema';
import { ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceScalarFieldEnumSchema } from './enums/ResourceScalarFieldEnum.schema';

export const ResourceFindFirstSchema = z.object({
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
  distinct: z.array(ResourceScalarFieldEnumSchema).optional(),
});
