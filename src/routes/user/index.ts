import Router from '@koa/router';
 
import UserController from '../../controllers/user';

const userRouter = new Router();
 
// users 相关的路由
userRouter.get('/users', UserController.listUsers);
userRouter.get('/users/:id', UserController.showUserDetail);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);

export {
  userRouter
}