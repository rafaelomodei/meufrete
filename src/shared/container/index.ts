import { container } from 'tsyringe';
import { DriversRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IDriversRepository } from '../../modules/accounts/repositories/IUserRepositories';
import { ICompaniesRepository } from '../../modules/companies/repositories/ICompaniesRepositories';
import { CompaniesRepository } from '../../modules/companies/repositories/implementations/CompaniesRepository';
import { ILoadsRepository } from '../../modules/loads/repositories/ILoadsRepositories';
import { LoadsRepository } from '../../modules/loads/repositories/implementations/LoadsRepository';

container.registerSingleton<ILoadsRepository>(
  'LoadsRepository',
  LoadsRepository
);

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository
);

container.registerSingleton<IDriversRepository>(
  'DriversRepository',
  DriversRepository
);

