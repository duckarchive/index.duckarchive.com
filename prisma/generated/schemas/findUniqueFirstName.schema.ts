import { z } from 'zod';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';

export const FirstNameFindUniqueSchema = z.object({
  where: FirstNameWhereUniqueInputObjectSchema,
});
