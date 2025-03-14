import { z } from 'zod';
import { FirstNameWhereInputObjectSchema } from './objects/FirstNameWhereInput.schema';

export const FirstNameDeleteManySchema = z.object({
  where: FirstNameWhereInputObjectSchema.optional(),
});
