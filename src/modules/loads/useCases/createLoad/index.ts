import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { CreateLoadController } from './CreateLoadController';
import { CreateLoadUseCase } from './CreateLoadUseCase';

const loadsRepository = LoadsRepository.getInstance();
const createLoadUseCase = new CreateLoadUseCase(loadsRepository);
const createLoadController = new CreateLoadController(createLoadUseCase);

export { createLoadController };
