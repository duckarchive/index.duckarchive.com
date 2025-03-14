import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'role',
  'is_blacklisted',
  'created_at',
  'updated_at',
]);
