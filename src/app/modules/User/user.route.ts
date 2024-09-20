import express from 'express';
import { multerUpload } from '../../config/multer.config';
import { UserControllers } from './user.controller';

const router = express.Router();

export const UserRoutes = router;

router.post(
  '/create-user',
  multerUpload.single('image'),
  UserControllers.userRegister
);
router.get('/', UserControllers.getAllUsers);
// router.get('/:id', UserControllers.getSingleUser);
