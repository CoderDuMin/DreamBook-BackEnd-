// src/routes.ts
import Router from '@koa/router';

import { authRouter } from './auth'
import { userRouter } from './user';
import { dreamRouter } from './dream';

const protectedRouter = new Router();

protectedRouter.prefix('/api')
// users 相关的路由
protectedRouter.use(userRouter.routes()).use(userRouter.allowedMethods())
// dream 相关的路由
protectedRouter.use(dreamRouter.routes()).use(dreamRouter.allowedMethods())

export { protectedRouter, authRouter };