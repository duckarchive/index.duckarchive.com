import { z } from 'zod';
import { ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';

export const ResourceDeleteManySchema = z.object({
  where: ResourceWhereInputObjectSchema.optional(),
});
