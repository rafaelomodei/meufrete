import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/accounts/repositories/IUserRepositories';
import { ICompaniesRepository } from '../../modules/companies/repositories/ICompaniesRepositories';
import { CompaniesRepository } from '../../modules/companies/infra/typeorm/repositories/CompaniesRepository';
import { ILoadsRepository } from '../../modules/loads/repositories/ILoadsRepositories';
import { LoadsRepository } from '../../modules/loads/infra/typeorm/repositories/LoadsRepository';
import { IRoutesRepository } from '../../modules/route/repositories/IRouteRepositories';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { RoutesRepository } from '../../modules/route/infra/typeorm/repositories/RouteRepository';
import { FreightRepository } from '../../modules/freight/infra/typeorm/repositories/FreightRepository';
import { IFreightRepository } from '../../modules/freight/repositories/IFreightRepositories';
import { JobsRepository } from '../../modules/job/infra/typeorm/repositories/JobRepository';
import { IJobsRepository } from '../../modules/job/repositories/IJobRepositories';

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

container.registerSingleton<IFreightRepository>(
  'FreightsRepository',
  FreightRepository
);

container.registerSingleton<IJobsRepository>('JobsRepository', JobsRepository);
