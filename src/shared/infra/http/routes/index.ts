import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { companiesRoutes } from './companies.routes';
import { usersRoutes } from './users.routes';
import { loadsRoutes } from './loads.routes';
import { routesRoutes } from './routes.routes';
import { freightsRoutes } from './freights.routes';

const router = Router();

router.use('/loads', loadsRoutes);
router.use('/companies', companiesRoutes);
router.use('/users', usersRoutes);
router.use('/routes', routesRoutes);
router.use('/freights', freightsRoutes);

router.use(authenticateRoutes);

export { router };
