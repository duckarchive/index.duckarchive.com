import { z } from 'zod';
import { ResourceCreateInputObjectSchema } from './objects/ResourceCreateInput.schema';
import { ResourceUncheckedCreateInputObjectSchema } from './objects/ResourceUncheckedCreateInput.schema';

export const ResourceCreateOneSchema = z.object({
  data: z.union([
    ResourceCreateInputObjectSchema,
    ResourceUncheckedCreateInputObjectSchema,
  ]),
});
