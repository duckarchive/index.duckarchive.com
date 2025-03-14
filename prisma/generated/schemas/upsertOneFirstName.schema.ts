import { z } from 'zod';
import { FirstNameWhereUniqueInputObjectSchema } from './objects/FirstNameWhereUniqueInput.schema';
import { FirstNameCreateInputObjectSchema } from './objects/FirstNameCreateInput.schema';
import { FirstNameUncheckedCreateInputObjectSchema } from './objects/FirstNameUncheckedCreateInput.schema';
import { FirstNameUpdateInputObjectSchema } from './objects/FirstNameUpdateInput.schema';
import { FirstNameUncheckedUpdateInputObjectSchema } from './objects/FirstNameUncheckedUpdateInput.schema';

export const FirstNameUpsertSchema = z.object({
  where: FirstNameWhereUniqueInputObjectSchema,
  create: z.union([
    FirstNameCreateInputObjectSchema,
    FirstNameUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FirstNameUpdateInputObjectSchema,
    FirstNameUncheckedUpdateInputObjectSchema,
  ]),
});
