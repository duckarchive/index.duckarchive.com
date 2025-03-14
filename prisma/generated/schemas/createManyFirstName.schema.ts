import { z } from 'zod';
import { FirstNameCreateManyInputObjectSchema } from './objects/FirstNameCreateManyInput.schema';

export const FirstNameCreateManySchema = z.object({
  data: z.union([
    FirstNameCreateManyInputObjectSchema,
    z.array(FirstNameCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
