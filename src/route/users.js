import { Router } from 'express';
import UserController from '../controller/user';
import authentication from '../middleware/authenticate';
import { userValidation, editValidation, userLoginValidation } from '../middleware/validation';

const userRouter = new Router(); 

userRouter
.post('/register',authentication, userValidation, UserController.addUser)
.post('/login',userLoginValidation, UserController.login)
.post('/search',authentication, UserController.searchUser)
.put('/edit/:id', authentication, editValidation,  UserController.editUser)
.delete('/abolish/:id', authentication, UserController.deleteUser)
.get('/all', authentication, UserController.usersList);

export default userRouter;