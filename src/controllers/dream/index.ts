// src/controllers/user.ts
import { Context } from 'koa';
import {getManager} from 'typeorm'
import {Dream} from '../../entity/dream'
 
export default class UserController {
  public static async listDreamsWithPublic(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dreams = await dreamRepository.find({where:{status:0,isPublic:0}});
 
    ctx.status = 200;
    ctx.body = {
      code:ctx.status,
      data:dreams,
      total:dreams.length,
      msg:'请求成功'
    };
  }
  public static async listDreamsOnlySelf(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dreams = await dreamRepository.find({where:{status:0,userId:ctx.state.user.id}});
 
    ctx.status = 200;
    ctx.body = {
      code:ctx.status,
      data:dreams,
      total:dreams.length,
      msg:'请求成功'
    };
  }
 
  public static async showDreamDetail(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dream = await dreamRepository.findOne({where:{status:0,id:ctx.params.id}});
    if(!dream){
      ctx.status = 400
      ctx.body = {
        msg:'没有找到该梦境'
      }
    }else if(dream.isPublic === 1 && dream.userId !== +ctx.state.user.id){
      ctx.status = 403
      ctx.body = {
        msg:'没有权限查看该梦境'
      }
    }else{
      ctx.status = 200
      ctx.body = {
        code:'A0001',
        data:dream,
        msg:'请求成功'
      }
    }
  }
 
  public static async updateDream(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dream = await dreamRepository.findOne({where:{status:0,id:ctx.params.id}});
    if(!dream){
      ctx.status = 400
      ctx.body = {
        msg:'没有找到该梦境'
      }
    }else if(dream.userId !== +ctx.state.user.id){
      ctx.status = 403
      ctx.body = {
        msg:'没有权限修改该梦境'
      }
    }else{
      const params = ctx.request.body
      await dreamRepository.update({id:ctx.params.id},{
        title:params.title,
        editTime:new Date(),
        content:params.content,
        type:params.type,
        isPublic:params.isPublic
      })
      ctx.status = 200
      ctx.body = {
        code:'A0001',
        data:'',
        msg:'修改成功'
      }
    }
  }
 
  public static async deleteDream(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dream = await dreamRepository.findOne({where:{status:0,id:ctx.params.id}});
    if(!dream){
      ctx.status = 400
      ctx.body = {
        msg:'没有找到该梦境'
      }
    }else if(dream.userId !== +ctx.state.user.id){
      ctx.status = 403
      ctx.body = {
        msg:'没有权限修改该梦境'
      }
    }else{
      await dreamRepository.update({id:ctx.params.id},{status:1})
      ctx.body = {
        code:'A0001',
        data:'',
        msg:'删除成功'
      }
    }
    
  }

  public static async addDream(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const params = ctx.request.body
    const newDream = new Dream()
    newDream.createTime = new Date()
    newDream.content = params.content
    newDream.title = params.title
    newDream.type = params.type || 0
    newDream.isPublic = params.isPublic || 0
    newDream.userId = ctx.state.user.id
    newDream.status = 0
    newDream.wakeTime = params.wakeTime
    const res = await dreamRepository.insert(newDream);
    ctx.status = 200
    ctx.body = {
      code:'A0001',
      data:'',
      msg:'添加梦境成功'
    }
  }

  public static async changeDreamPublic(ctx: Context) {
    const dreamRepository = getManager().getRepository(Dream);
    const dream = await dreamRepository.findOne({where:{status:0,id:ctx.params.id}});
    if(!dream){
      ctx.status = 400
      ctx.body = {
        msg:'没有找到该梦境'
      }
    }else if(dream.userId !== +ctx.state.user.id){
      ctx.status = 403
      ctx.body = {
        msg:'没有权限修改该梦境'
      }
    }else{
      await dreamRepository.update({id:ctx.params.id},{
        isPublic:dream.isPublic == 0 ? 1 : 0
      })
      ctx.status = 200
      ctx.body = {
        code:'A0001',
        data:'',
        msg:'修改成功'
      }
    }
  }
}