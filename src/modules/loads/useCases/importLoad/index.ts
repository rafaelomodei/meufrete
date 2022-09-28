import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { ImportLoadController } from './ImportLoadController';
import { ImportLoadUseCase } from './ImportLoadUseCase';

const importLoadsRepository = LoadsRepository.getInstance();
const importLoadUseCase = new ImportLoadUseCase(importLoadsRepository);
const importLoadController = new ImportLoadController(
  importLoadUseCase
);

export { importLoadController };
