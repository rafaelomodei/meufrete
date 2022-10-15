import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, certification } = request.body;
    
    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    await createCompanyUseCase.execute({ name, certification });

    return response.status(201).send();
  }
}

export { CreateCompanyController };
