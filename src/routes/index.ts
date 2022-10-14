import { Router } from 'express';
import { loadsRoutes } from './loads.routes';

const router = Router();

router.use('/loads', loadsRoutes);

export { router };
