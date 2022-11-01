import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ListRoutesUseCase } from './ListRoutesUseCase';

class ListRoutesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRoutesUseCase = container.resolve(ListRoutesUseCase);
    const allRouts = await listRoutesUseCase.execute();

    return response.json(allRouts);
  }
}

export { ListRoutesController };
