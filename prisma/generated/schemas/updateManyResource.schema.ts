import { z } from 'zod';
import { ResourceUpdateManyMutationInputObjectSchema } from './objects/ResourceUpdateManyMutationInput.schema';
import { ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';

export const ResourceUpdateManySchema = z.object({
  data: ResourceUpdateManyMutationInputObjectSchema,
  where: ResourceWhereInputObjectSchema.optional(),
});
