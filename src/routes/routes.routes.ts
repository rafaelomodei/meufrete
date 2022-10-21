import { Router } from 'express';
import { CreateRouterController } from '../modules/route/useCases/createUser/CreateRouteController';

const routesRoutes = Router();

const createRoutesController = new CreateRouterController();

routesRoutes.post('/', createRoutesController.handle);

export { routesRoutes };
