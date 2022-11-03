import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ListJobsUseCase } from './ListJobsUseCase';

class ListJobsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listJobsUseCase = container.resolve(ListJobsUseCase);
    const allJobs = await listJobsUseCase.execute();

    return response.json(allJobs);
  }
}

export { ListJobsController };
