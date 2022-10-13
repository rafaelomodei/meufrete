import { container } from 'tsyringe';
import { ILoadsRepository } from '../../modules/loads/repositories/ILoadsRepositories';
import { LoadsRepository } from '../../modules/loads/repositories/implementations/LoadsRepository';

container.registerSingleton<ILoadsRepository>(
  'LoadsRepository',
  LoadsRepository
);
