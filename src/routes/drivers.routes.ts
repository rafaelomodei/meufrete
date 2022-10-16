import { Router } from 'express';
import { CreateDriverController } from '../modules/accounts/useCases/createUser/CreateUserController';

const driversRoutes = Router();

const createDriverController = new CreateDriverController();

driversRoutes.post('/', createDriverController.handle);

export { driversRoutes };
