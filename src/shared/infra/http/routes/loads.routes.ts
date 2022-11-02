import { Router, Request, Response } from 'express';
import multer from 'multer';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateLoadController } from '../../../../modules/loads/useCases/createLoad/CreateLoadController';
import { ImportLoadController } from '../../../../modules/loads/useCases/importLoad/ImportLoadController';
import { ListLoadsController } from '../../../../modules/loads/useCases/listLoads/ListLoadsController';
import { DistanceMatrix } from '../../../../services/DistanceMatrix';

const loadsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createLoadController = new CreateLoadController();
const listLoadsController = new ListLoadsController();
const importLoadController = new ImportLoadController();

loadsRoutes.use(ensureAuthenticated);

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
