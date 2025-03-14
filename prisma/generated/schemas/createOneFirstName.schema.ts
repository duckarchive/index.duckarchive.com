import { z } from 'zod';
import { FirstNameCreateInputObjectSchema } from './objects/FirstNameCreateInput.schema';
import { FirstNameUncheckedCreateInputObjectSchema } from './objects/FirstNameUncheckedCreateInput.schema';

export const FirstNameCreateOneSchema = z.object({
  data: z.union([
    FirstNameCreateInputObjectSchema,
    FirstNameUncheckedCreateInputObjectSchema,
  ]),
});
