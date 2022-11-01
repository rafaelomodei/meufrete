import { Router } from 'express';
import { CreateRouterController } from '../modules/route/useCases/createRoute/CreateRouteController';
import { ListRoutesController } from '../modules/route/useCases/listRoutes/ListRoutesController';

const routesRoutes = Router();

const createRoutesController = new CreateRouterController();
const listRoutesController = new ListRoutesController();


routesRoutes.post('/', createRoutesController.handle);
routesRoutes.get('/', listRoutesController.handle);


export { routesRoutes };
