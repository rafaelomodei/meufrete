import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, certification, listLoads } = request.body;

    console.info(listLoads)

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    await createCompanyUseCase.execute({ name, certification, listLoads });

    return response.status(201).send();
  }
}

export { CreateCompanyController };
