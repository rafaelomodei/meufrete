import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';
import { ImportLoadController } from './ImportLoadController';
import { ImportLoadUseCase } from './ImportLoadUseCase';

const importLoadsRepository = null;
const importLoadUseCase = new ImportLoadUseCase(importLoadsRepository);
const importLoadController = new ImportLoadController(
  importLoadUseCase
);

export { importLoadController };
