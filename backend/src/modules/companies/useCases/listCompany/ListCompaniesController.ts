import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ListCompaniesUseCase } from './ListCompaniesUseCase';

class ListCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCompaniesUseCase = container.resolve(ListCompaniesUseCase);
    const allCompanies = await listCompaniesUseCase.execute();

    return response.json(allCompanies);
  }
}

export { ListCompaniesController };
