import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';
import currentUser from '../../../../utils/user';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, certification, loads, city } = request.body;

    const userId = currentUser(request);
    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const companyCreated = await createCompanyUseCase.execute({
      name,
      certification,
      loads,
      userId,
      city,
    });

    return response.status(201).json(companyCreated);
  }
}

export { CreateCompanyController };
