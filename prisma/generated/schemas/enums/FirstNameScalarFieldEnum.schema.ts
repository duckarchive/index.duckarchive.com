import { z } from 'zod';

export const FirstNameScalarFieldEnumSchema = z.enum([
  'name',
  'normalized_name',
  'is_male',
]);
