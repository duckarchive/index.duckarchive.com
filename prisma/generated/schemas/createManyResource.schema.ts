import { z } from 'zod';
import { ResourceCreateManyInputObjectSchema } from './objects/ResourceCreateManyInput.schema';

export const ResourceCreateManySchema = z.object({
  data: z.union([
    ResourceCreateManyInputObjectSchema,
    z.array(ResourceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
