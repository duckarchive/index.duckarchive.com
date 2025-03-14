import { z } from 'zod';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';

export const ResourceDeleteOneSchema = z.object({
  where: ResourceWhereUniqueInputObjectSchema,
});
