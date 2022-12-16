import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateCompanyController } from '../../../../modules/companies/useCases/createCompany/CreateCompanyController';
import { CreateLoadsToCompanyController } from '../../../../modules/companies/useCases/createLoadsToCompany/CreateLoadsToCompanyController';
import { ImportCompanyController } from '../../../../modules/companies/useCases/importCompany/ImportCompanyController';
import { ListCompaniesController } from '../../../../modules/companies/useCases/listCompany/ListCompaniesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserCompany } from '../middlewares/ensureUserCompany';

const companiesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCompanyController = new CreateCompanyController();
const importCompanyController = new ImportCompanyController();
const listCompaniesController = new ListCompaniesController();
const createLoadsToCompanyController = new CreateLoadsToCompanyController();

companiesRoutes.get(
  '/',
  ensureAuthenticated,
  ensureUserCompany,
  listCompaniesController.handle
);

companiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureUserCompany,
  createCompanyController.handle
);

companiesRoutes.post(
  '/import',
  ensureAuthenticated,
  ensureUserCompany,

  upload.single('file'),
  (request: Request, response: Response) => {
    return importCompanyController.handle(request, response);
  }
);

companiesRoutes.post(
  '/loads/:id',
  ensureAuthenticated,
  ensureUserCompany,
  createLoadsToCompanyController.handle
);

export { companiesRoutes };
