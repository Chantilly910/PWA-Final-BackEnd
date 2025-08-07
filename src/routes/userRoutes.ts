import { Router } from 'express';

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

import { RequestHandler } from 'express-serve-static-core';

const router = Router();

router.post('/', createUser );
router.get('/', getUsers );
router.get('/:id', getUserById as RequestHandler );
router.put('/:id', updateUser as RequestHandler );
router.delete('/:id', deleteUser as RequestHandler );

export default router;