import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateLoadsToCompanyUseCase } from './CreateLoadsToCompanyUseCase';

class CreateLoadsToCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { loadsId } = request.body;

    const createLoadsToCampanyUseCase = container.resolve(
      CreateLoadsToCompanyUseCase
    );
    const company = await createLoadsToCampanyUseCase.execute({ companyId: id, loadsId });

    return response.status(201).json(company);
  }
}

export { CreateLoadsToCompanyController };
