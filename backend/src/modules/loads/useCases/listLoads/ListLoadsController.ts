import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ListLoadsUseCase } from './ListLoadsUseCase';

class ListLoadsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLoadsUseCase = container.resolve(ListLoadsUseCase);
    const allLoads = await listLoadsUseCase.execute();

    return response.json(allLoads);
  }
}

export { ListLoadsController };
