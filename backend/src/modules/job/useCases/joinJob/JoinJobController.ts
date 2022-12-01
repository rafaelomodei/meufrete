import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { JoinJobUseCase } from './JoinJobUseCase';

class JoinJobsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { driverId } = request.body;

    const joinJobUseCase = container.resolve(JoinJobUseCase);

    const job = await joinJobUseCase.execute({
      jobId: id,
      driverId,
    });

    return response.status(201).json(job);
  }
}

export { JoinJobsController };
