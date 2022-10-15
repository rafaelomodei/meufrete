import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateCompanyController } from '../modules/companies/useCases/createCompany/CreateCompanyController';
import { ImportCompanyController } from '../modules/companies/useCases/importCompany/ImportCompanyController';
import { ListCompaniesController } from '../modules/companies/useCases/listCompany/ListCompaniesController';

const companiesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCompanyController = new CreateCompanyController();
const importCompanyController = new ImportCompanyController();
const listCompaniesController = new ListCompaniesController();

companiesRoutes.get('/', listCompaniesController.handle);
companiesRoutes.post('/', createCompanyController.handle);
companiesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCompanyController.handle(request, response);
  }
);

export { companiesRoutes };
