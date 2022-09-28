import { Router } from 'express';
import { loadsRoutes } from './loads.routes';
import { specificationRoutes } from './specification.routes';

const router = Router();

router.use('/loads', loadsRoutes);
router.use('/specification', specificationRoutes);

export { router };
