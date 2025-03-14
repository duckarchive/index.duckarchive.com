import { z } from 'zod';
import { ResourceUpdateInputObjectSchema } from './objects/ResourceUpdateInput.schema';
import { ResourceUncheckedUpdateInputObjectSchema } from './objects/ResourceUncheckedUpdateInput.schema';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';

export const ResourceUpdateOneSchema = z.object({
  data: z.union([
    ResourceUpdateInputObjectSchema,
    ResourceUncheckedUpdateInputObjectSchema,
  ]),
  where: ResourceWhereUniqueInputObjectSchema,
});
