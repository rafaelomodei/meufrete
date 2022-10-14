import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateLoadController } from '../modules/loads/useCases/createLoad/CreateLoadController';
import { ImportLoadController } from '../modules/loads/useCases/importLoad/ImportLoadController';
import { ListLoadsController } from '../modules/loads/useCases/listLoads/ListLoadsController';

const loadsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createLoadController = new CreateLoadController();
const listLoadsController = new ListLoadsController();
const importLoadController = new ImportLoadController();

loadsRoutes.post('/', createLoadController.handle);
loadsRoutes.get('/', listLoadsController.handle);
loadsRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importLoadController.handle(request, response);
  }
);

export { loadsRoutes };
