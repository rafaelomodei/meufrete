import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ListFreightUseCase } from './ListFreightUseCase';

class ListFreightsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFreightUseCase = container.resolve(ListFreightUseCase);
    const allFreights = await listFreightUseCase.execute();

    return response.json(allFreights);
  }
}

export { ListFreightsController };
