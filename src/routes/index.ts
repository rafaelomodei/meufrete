import { Router } from 'express';
import { companiesRoutes } from './companies.routes';
import { loadsRoutes } from './loads.routes';

const router = Router();

router.use('/loads', loadsRoutes);
router.use('/companies', companiesRoutes);


export { router };
