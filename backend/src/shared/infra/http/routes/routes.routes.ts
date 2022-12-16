import { Router } from 'express';
import { CreateRouterController } from '../../../../modules/route/useCases/createRoute/CreateRouteController';
import { ListRoutesController } from '../../../../modules/route/useCases/listRoutes/ListRoutesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserCompany } from '../middlewares/ensureUserCompany';

const routesRoutes = Router();

const createRoutesController = new CreateRouterController();
const listRoutesController = new ListRoutesController();

routesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureUserCompany,
  createRoutesController.handle
);

routesRoutes.get(
  '/',
  ensureAuthenticated,
  ensureUserCompany,
  listRoutesController.handle
);

export { routesRoutes };
