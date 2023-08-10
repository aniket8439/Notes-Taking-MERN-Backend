import express from 'express';
import { USER_ROUTES } from '../../../shared/utils/app-constants.js';
import userController from '../controllers/user-controller.js';

const userRoutes = express();

userRoutes.post(USER_ROUTES.ADD, userController.addUser);
userRoutes.get(USER_ROUTES.ALL_USERS, userController.getAllUser);
userRoutes.delete(USER_ROUTES.DELETE_USER, userController.deleteUser);
userRoutes.patch(USER_ROUTES.UPDATE_USER, userController.updateUser);

export default userRoutes;