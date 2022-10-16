import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { companiesRoutes } from './companies.routes';
import { driversRoutes } from './drivers.routes';
import { loadsRoutes } from './loads.routes';

const router = Router();

router.use('/loads', loadsRoutes);
router.use('/companies', companiesRoutes);
router.use('/drivers', driversRoutes);
router.use(authenticateRoutes);

export { router };
