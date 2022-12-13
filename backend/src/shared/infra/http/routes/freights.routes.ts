import { Router } from 'express';
import { CreateFreightController } from '../../../../modules/freight/useCases/createFreight/CreateFreightController';
import { JoinWorkController } from '../../../../modules/freight/useCases/joinWord/JoinWorkController';
import { ListFreightsController } from '../../../../modules/freight/useCases/listRoutes/ListFreightController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const freightsRoutes = Router();

const createFreightsController = new CreateFreightController();
const listFreightsController = new ListFreightsController();
const joinWorkController = new JoinWorkController();

freightsRoutes.post(
  '/:originCompany',
  ensureAuthenticated,
  createFreightsController.handle
);
freightsRoutes.post(
  '/join/:freight',
  ensureAuthenticated,
  joinWorkController.handle
);
freightsRoutes.get('/', ensureAuthenticated, listFreightsController.handle);

export { freightsRoutes };
