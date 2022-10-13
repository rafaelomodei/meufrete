import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { CreateLoadController } from './CreateLoadController';
import { CreateLoadUseCase } from './CreateLoadUseCase';

export default (): CreateLoadController => {
  const loadsRepository = new LoadsRepository();
  const createLoadUseCase = new CreateLoadUseCase(loadsRepository);
  const createLoadController = new CreateLoadController(createLoadUseCase);
  return createLoadController;
};
