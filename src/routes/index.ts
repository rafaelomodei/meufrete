import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { companiesRoutes } from './companies.routes';
import { usersRoutes } from './users.routes';
import { loadsRoutes } from './loads.routes';

const router = Router();

router.use('/loads', loadsRoutes);
router.use('/companies', companiesRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
