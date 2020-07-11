import { Router } from 'express';
import AdminController from '../controller/admin';
import { signupValidation, loginValidation } from '../middleware/validation';


const AdminRouter = new Router();

AdminRouter
.post('/signup', signupValidation, AdminController.signup)
.post('/login', loginValidation, AdminController.login);

export default AdminRouter;