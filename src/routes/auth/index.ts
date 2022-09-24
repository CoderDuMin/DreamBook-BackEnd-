// src/routes.ts
import Router from '@koa/router';
 
import AuthController from '../../controllers/auth';
 
const authRouter = new Router();
authRouter.prefix('/api') 
// auth 相关的路由
authRouter.post('/auth/login', AuthController.login);
authRouter.post('/auth/register', AuthController.register);
 
export {
  authRouter
}