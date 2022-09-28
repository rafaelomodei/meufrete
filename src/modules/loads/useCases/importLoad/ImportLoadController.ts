import { Request, Response } from 'express';
import { ImportLoadUseCase } from './ImportLoadUseCase';

class ImportLoadController {
  constructor(private importLoadUseCase: ImportLoadUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importLoadUseCase.execute(file);
    
    return response.send();
  }
}

export { ImportLoadController };
