import Router from '@koa/router';
 
import dreamController from '../../controllers/dream';

const dreamRouter = new Router();
 
// dream 相关的路由
dreamRouter.get('/dream/publiclist', dreamController.listDreamsWithPublic);
dreamRouter.get('/dream/selflist', dreamController.listDreamsOnlySelf);
dreamRouter.get('/dream/detail/:id', dreamController.showDreamDetail);
dreamRouter.post('/dream/addDream', dreamController.addDream);
dreamRouter.put('/dream/update/:id', dreamController.updateDream);
dreamRouter.delete('/dream/delete/:id', dreamController.deleteDream);
dreamRouter.post('/dream/changePublic/:id', dreamController.changeDreamPublic);

export {
  dreamRouter
}