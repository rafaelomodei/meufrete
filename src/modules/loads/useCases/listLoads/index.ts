import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { ListLoadsController } from './ListLoadsController';
import { ListLoadsUseCase } from './ListLoadsUseCase';

const loadsRepository = null;
const listLoadsUseCase = new ListLoadsUseCase(loadsRepository);
const listLoadsController = new ListLoadsController(listLoadsUseCase);

export { listLoadsController };
