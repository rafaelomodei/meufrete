import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateLoadController } from '../modules/loads/useCases/createLoad/CreateLoadController';
import { importLoadController } from '../modules/loads/useCases/importLoad';
import { listLoadsController } from '../modules/loads/useCases/listLoads';

const loadsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createLoadController = new CreateLoadController();

loadsRoutes.post('/', createLoadController.handle);

loadsRoutes.get('/', (request: Request, response: Response) =>
  listLoadsController.handle(request, response)
);

loadsRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importLoadController.handle(request, response);
  }
);

export { loadsRoutes };
