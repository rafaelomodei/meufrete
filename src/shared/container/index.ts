import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/accounts/repositories/IUserRepositories';
import { ICompaniesRepository } from '../../modules/companies/repositories/ICompaniesRepositories';
import { CompaniesRepository } from '../../modules/companies/infra/typeorm/repositories/CompaniesRepository';
import { ILoadsRepository } from '../../modules/loads/repositories/ILoadsRepositories';
import { LoadsRepository } from '../../modules/loads/infra/typeorm/repositories/LoadsRepository';
import { IRoutesRepository } from '../../modules/route/repositories/IRouteRepositories';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { RoutesRepository } from '../../modules/route/infra/typeorm/repositories/RouteRepository';

container.registerSingleton<ILoadsRepository>(
  'LoadsRepository',
  LoadsRepository
);

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IRoutesRepository>(
  'RoutesRepository',
  RoutesRepository
);
