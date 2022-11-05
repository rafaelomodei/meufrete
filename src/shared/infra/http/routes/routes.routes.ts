import { Router } from 'express';
import { CreateRouterController } from '../../../../modules/route/useCases/createRoute/CreateRouteController';
import { ListRoutesController } from '../../../../modules/route/useCases/listRoutes/ListRoutesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routesRoutes = Router();

const createRoutesController = new CreateRouterController();
const listRoutesController = new ListRoutesController();

routesRoutes.post('/', ensureAuthenticated, createRoutesController.handle);
routesRoutes.get('/', ensureAuthenticated, listRoutesController.handle);

export { routesRoutes };
