import { Router } from 'express';
import { AuthenticateDriverController } from '../modules/accounts/useCases/authenticaterUser/AuthenticateDriverController';

const authenticateRoutes = Router();

const createDriverController = new AuthenticateDriverController();

authenticateRoutes.post('/session', createDriverController.handle);

export { authenticateRoutes };
