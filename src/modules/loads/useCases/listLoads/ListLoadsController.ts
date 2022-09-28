import { Response, Request } from 'express';
import { ListLoadsUseCase } from './ListLoadsUseCase';

class ListLoadsController {
  constructor(private listLoadsUseCase: ListLoadsUseCase) {}

  handle(request: Request, response: Response): Response {
    const allLoads = this.listLoadsUseCase.execute();

    return response.json(allLoads);
  }
}

export { ListLoadsController };
