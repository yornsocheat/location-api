import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { createUserSchema, getUserSchema, deleteUserSchema } from '../../schemas/users.schema';

const router = Router();

// Create user
router.post('/', validate(createUserSchema), (req, res) => {
  const { name, email, age } = req.body;
  res.json({
    message: 'User created successfully',
    user: { name, email, age },
  });
});

// Get user by ID
router.get('/', validate(getUserSchema), (req, res) => {
  const { id } = req.query;
  res.json({
    message: 'User retrieved successfully',
    userId: id,
  });
});

// Delete user
router.delete('/:userId', validate(deleteUserSchema), (req, res) => {
  const { userId } = req.params;
  res.json({
    message: 'User deleted successfully',
    userId,
  });
});

export default router;
