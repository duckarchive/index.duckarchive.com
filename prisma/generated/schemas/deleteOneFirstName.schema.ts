import { z } from 'zod';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';

export const FirstNameDeleteOneSchema = z.object({
  where: FirstNameWhereUniqueInputObjectSchema,
});
