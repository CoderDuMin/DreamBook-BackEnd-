
// src/controllers/auth.ts
import { Context } from 'koa';
import * as argon2 from 'argon2';
import { getManager } from 'typeorm';
import jwt from 'jsonwebtoken';
 
import {JWT_SECRET} from '../../constants'
import { User } from '../../entity/user';
 
export default class AuthController {
  // ...
  public static async login(ctx: Context) {
    const userRepository = getManager().getRepository(User);
 
    const user = await userRepository
      .createQueryBuilder()
      .where({ account: ctx.request.body.account })
      .addSelect('User.password')
      .getOne();
 
    if (!user) {
      ctx.status = 401;
      ctx.body = { message: '用户名不存在' };
    } else if (await argon2.verify(user.password, ctx.request.body.password)) {
      ctx.status = 200;
      ctx.body = { 
        code:200,
        data:{
          nickname:user.nickname,
          account:user.account,
          gender:user.gender
        },
        token: jwt.sign({ id: user.id,nickname:user.nickname }, JWT_SECRET) ,
        msg:'登录成功'
      };
    } else {
      ctx.status = 401;
      ctx.body = { message: '密码错误' };
    }
  }

  public static async register(ctx: Context) {
    const userRepository = getManager().getRepository(User);
 
    const newUser = new User();
    newUser.account = ctx.request.body.account;
    newUser.nickname = ctx.request.body.nickname;
    newUser.password = await argon2.hash(ctx.request.body.password);
    newUser.gender = ctx.request.body.gender
    newUser.status = 0
 
    // 保存到数据库
    const user = await userRepository.save(newUser);
 
    ctx.status = 201;
    ctx.body = {
      code:200,
      data:user,
      msg:'注册成功'
    }
  }
}