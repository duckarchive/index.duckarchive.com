import { z } from 'zod';
import { FirstNameUpdateInputObjectSchema } from './objects/FirstNameUpdateInput.schema';
import { FirstNameUncheckedUpdateInputObjectSchema } from './objects/FirstNameUncheckedUpdateInput.schema';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';

export const FirstNameUpdateOneSchema = z.object({
  data: z.union([
    FirstNameUpdateInputObjectSchema,
    FirstNameUncheckedUpdateInputObjectSchema,
  ]),
  where: FirstNameWhereUniqueInputObjectSchema,
});
