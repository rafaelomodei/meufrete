import { Router } from 'express';
import { CreateFreightController } from '../../../../modules/freight/useCases/createFreight/CreateFreightController';
import { ListFreightsController } from '../../../../modules/freight/useCases/listRoutes/ListFreightController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const freightsRoutes = Router();

const createFreightsController = new CreateFreightController();
const listFreightsController = new ListFreightsController();

freightsRoutes.post('/', ensureAuthenticated, createFreightsController.handle);
freightsRoutes.get('/', ensureAuthenticated, listFreightsController.handle);

export { freightsRoutes };
