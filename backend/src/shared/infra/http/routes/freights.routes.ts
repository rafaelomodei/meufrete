import { Router } from 'express';
import { CreateFreightController } from '../../../../modules/freight/useCases/createFreight/CreateFreightController';
import { FinishWorkController } from '../../../../modules/freight/useCases/finishWork/FinishWorkController';
import { JoinWorkController } from '../../../../modules/freight/useCases/joinWord/JoinWorkController';
import { ListFreightsController } from '../../../../modules/freight/useCases/listRoutes/ListFreightController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserCompany } from '../middlewares/ensureUserCompany';
import { ensureUserDriver } from '../middlewares/ensureUserDriver';

const freightsRoutes = Router();

const createFreightsController = new CreateFreightController();
const listFreightsController = new ListFreightsController();
const joinWorkController = new JoinWorkController();
const finishWorkController = new FinishWorkController();

freightsRoutes.post(
  '/:originCompany',
  ensureAuthenticated,
  ensureUserCompany,
  createFreightsController.handle
);
freightsRoutes.post(
  '/join/:freight',
  ensureAuthenticated,
  ensureUserDriver,
  joinWorkController.handle
);

freightsRoutes.post(
  '/finish/:freight',
  ensureAuthenticated,
  finishWorkController.handle
);

freightsRoutes.get('/', ensureAuthenticated, listFreightsController.handle);

export { freightsRoutes };
