import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportLoadUseCase } from './ImportLoadUseCase';

class ImportLoadController {
  handle(request: Request, response: Response): Response {
    const { file } = request;

    const importLoadUseCase = container.resolve(ImportLoadUseCase);

    importLoadUseCase.execute(file);

    return response.send();
  }
}

export { ImportLoadController };
