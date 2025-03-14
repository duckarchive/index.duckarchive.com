import { z } from 'zod';
import { FirstNameUpdateManyMutationInputObjectSchema } from './objects/FirstNameUpdateManyMutationInput.schema';
import { FirstNameWhereInputObjectSchema } from './objects/FirstNameWhereInput.schema';

export const FirstNameUpdateManySchema = z.object({
  data: FirstNameUpdateManyMutationInputObjectSchema,
  where: FirstNameWhereInputObjectSchema.optional(),
});
