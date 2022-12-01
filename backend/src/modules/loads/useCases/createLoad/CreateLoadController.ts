import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateLoadUseCase } from './CreateLoadUseCase';

class CreateLoadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, weight } = request.body;
    
    const createLoadUseCase = container.resolve(CreateLoadUseCase);
    await createLoadUseCase.execute({ name, weight });

    return response.status(201).send();
  }
}

export { CreateLoadController };
