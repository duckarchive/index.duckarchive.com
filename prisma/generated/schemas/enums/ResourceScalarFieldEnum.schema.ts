import { z } from 'zod';

export const ResourceScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'url',
  'is_blacklisted',
  'created_at',
  'updated_at',
]);
