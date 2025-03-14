import { z } from 'zod';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';

export const ResourceFindUniqueSchema = z.object({
  where: ResourceWhereUniqueInputObjectSchema,
});
