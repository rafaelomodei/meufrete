import { Router } from 'express';
import { AuthenticateUsersController } from '../../../../modules/accounts/useCases/authenticaterUser/AuthenticateUserController';

const authenticateRoutes = Router();

const createUsersController = new AuthenticateUsersController();

authenticateRoutes.post('/session', createUsersController.handle);

export { authenticateRoutes };
