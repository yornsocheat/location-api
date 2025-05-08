import { createUserSchema, getUserSchema, deleteUserSchema } from '../schemas/users.schema';
import { ZodError } from 'zod';

// Test cases for user creation validation
const testUserCreation = () => {
  console.log('\n=== Testing User Creation Validation ===\n');

  // Valid user data
  const validUser = {
    body: {
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
    },
  };

  // Invalid user data (multiple errors)
  const invalidUser = {
    body: {
      name: 'J', // Too short
      email: 'invalid-email', // Invalid email
      age: 15, // Too young
    },
  };

  try {
    // Test valid data
    const validResult = createUserSchema.parse(validUser);
    console.log('✅ Valid user data passed validation:', validResult);
  } catch (error) {
    console.error('❌ Valid user data failed validation:', error);
  }

  try {
    // Test invalid data
    createUserSchema.parse(invalidUser);
  } catch (error) {
    if (error instanceof ZodError) {
      console.log('✅ Invalid user data correctly caught:', error.errors);
    }
  }
};

// Test cases for user retrieval validation
const testUserRetrieval = () => {
  console.log('\n=== Testing User Retrieval Validation ===\n');

  // Valid query
  const validQuery = {
    query: {
      id: '123e4567-e89b-12d3-a456-426614174000', // Valid UUID
    },
  };

  // Invalid query
  const invalidQuery = {
    query: {
      id: 'not-a-uuid', // Invalid UUID
    },
  };

  try {
    // Test valid query
    const validResult = getUserSchema.parse(validQuery);
    console.log('✅ Valid query passed validation:', validResult);
  } catch (error) {
    console.error('❌ Valid query failed validation:', error);
  }

  try {
    // Test invalid query
    getUserSchema.parse(invalidQuery);
  } catch (error) {
    if (error instanceof ZodError) {
      console.log('✅ Invalid query correctly caught:', error.errors);
    }
  }
};

// Test cases for user deletion validation
const testUserDeletion = () => {
  console.log('\n=== Testing User Deletion Validation ===\n');

  // Valid params
  const validParams = {
    params: {
      userId: '123e4567-e89b-12d3-a456-426614174000', // Valid UUID
    },
  };

  // Invalid params
  const invalidParams = {
    params: {
      userId: 'not-a-uuid', // Invalid UUID
    },
  };

  try {
    // Test valid params
    const validResult = deleteUserSchema.parse(validParams);
    console.log('✅ Valid params passed validation:', validResult);
  } catch (error) {
    console.error('❌ Valid params failed validation:', error);
  }

  try {
    // Test invalid params
    deleteUserSchema.parse(invalidParams);
  } catch (error) {
    if (error instanceof ZodError) {
      console.log('✅ Invalid params correctly caught:', error.errors);
    }
  }
};

// Run all tests
console.log('Starting Validation Tests...\n');
testUserCreation();
testUserRetrieval();
testUserDeletion();
