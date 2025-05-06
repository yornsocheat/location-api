import { z } from 'zod';

// Example schema for a user creation request
export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    age: z.number().min(18, 'Must be at least 18 years old'),
  }),
});

// Example schema for a query parameter validation
export const getUserSchema = z.object({
  query: z.object({
    id: z.string().uuid('Invalid user ID'),
  }),
});

// Example schema for a route parameter validation
export const deleteUserSchema = z.object({
  params: z.object({
    userId: z.string().uuid('Invalid user ID'),
  }),
});
