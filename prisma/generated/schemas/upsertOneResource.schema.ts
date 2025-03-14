import { z } from 'zod';
import { ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceCreateInputObjectSchema } from './objects/ResourceCreateInput.schema';
import { ResourceUncheckedCreateInputObjectSchema } from './objects/ResourceUncheckedCreateInput.schema';
import { ResourceUpdateInputObjectSchema } from './objects/ResourceUpdateInput.schema';
import { ResourceUncheckedUpdateInputObjectSchema } from './objects/ResourceUncheckedUpdateInput.schema';

export const ResourceUpsertSchema = z.object({
  where: ResourceWhereUniqueInputObjectSchema,
  create: z.union([
    ResourceCreateInputObjectSchema,
    ResourceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ResourceUpdateInputObjectSchema,
    ResourceUncheckedUpdateInputObjectSchema,
  ]),
});
