import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { ListLoadsController } from './ListLoadsController';
import { ListLoadsUseCase } from './ListLoadsUseCase';

const loadsRepository = LoadsRepository.getInstance();
const listLoadsUseCase = new ListLoadsUseCase(loadsRepository);
const listLoadsController = new ListLoadsController(listLoadsUseCase);

export { listLoadsController };
