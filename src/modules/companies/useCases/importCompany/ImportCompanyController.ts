import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCompanyUseCase } from './ImportCompanyUseCase';

class ImportCompanyController {
  handle(request: Request, response: Response): Response {
    const { file } = request;

    const importCompanyUseCase = container.resolve(ImportCompanyUseCase);

    importCompanyUseCase.execute(file);

    return response.send();
  }
}

export { ImportCompanyController };
