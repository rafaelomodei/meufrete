import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, certification, loads, user, city } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const companyCreated = await createCompanyUseCase.execute({
      name,
      certification,
      loads,
      user,
      city,
    });

    return response.status(201).json(companyCreated);
  }
}

export { CreateCompanyController };
