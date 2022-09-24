// src/controllers/user.ts
import { Context } from 'koa';
import {getManager} from 'typeorm'
import {User} from '../../entity/user'
 
export default class UserController {
  public static async listUsers(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find({where:{status:0}});
 
    ctx.status = 200;
    ctx.body = {
      code:ctx.status,
      data:users,
      total:users.length,
      msg:'请求成功'
    };
  }
 
  public static async showUserDetail(ctx: Context) {
    ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.find({where:{id:ctx.params.id}});
    ctx.status = 200;
    if(user.length == 1){
      ctx.body = {
        code:ctx.status,
        data:user,
        msg:'请求成功'
      };
    }else{
      ctx.body = {
        code:ctx.status,
        data:null,
        msg:'不存在该用户'
      };
    }

  }
 
  public static async updateUser(ctx: Context) {
    const userId = +ctx.params.id
    if(userId !== +ctx.state.user.id){
      ctx.status = 403
      ctx.body = {
        msg:'当前用户无权进行此操作'
      }
      return;
    }
    ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
    const params = ctx.request.body
    const userRepository = getManager().getRepository(User);
    
    const res =  await userRepository.update({id:ctx.params.id},{...params});
    ctx.body ={
      data:res
    }
  }
 
  public static async deleteUser(ctx: Context) {
    const userId = +ctx.params.id
    if(userId !== +ctx.state.user.id){
      ctx.status = 403 
      ctx.body = {
        msg:'当前用户无权进行此操作'
      }
      return;
    }
    const userRepository = getManager().getRepository(User);
    await userRepository.update({id:ctx.params.id},{status:1})
      ctx.body = {
        code:'A0001',
        msg:'删除成功'
      }
    
  }
}