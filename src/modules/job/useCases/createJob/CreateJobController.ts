import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateJobUseCase } from './CreateJobUseCase';

class CreateJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { status, driver, freight } = request.body;

    const createJobUseCase = container.resolve(CreateJobUseCase);

    const job = await createJobUseCase.execute({
      status,
      driver,
      freight,
    });

    return response.status(201).json(job);
  }
}

export { CreateJobController };
