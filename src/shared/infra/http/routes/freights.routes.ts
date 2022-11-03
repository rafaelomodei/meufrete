import { Router } from 'express';
import { CreateFreightController } from '../../../../modules/freight/useCases/createFreight/CreateFreightController';
import { ListFreightsController } from '../../../../modules/freight/useCases/listRoutes/ListFreightController';

const freightsRoutes = Router();

const createFreightsController = new CreateFreightController();
const listFreightsController = new ListFreightsController();


freightsRoutes.post('/', createFreightsController.handle);
freightsRoutes.get('/', listFreightsController.handle);


export { freightsRoutes };
