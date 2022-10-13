import { Request, Response } from 'express';
import { CreateLoadUseCase } from './CreateLoadUseCase';
import { container } from 'tsyringe';

class CreateLoadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, weight } = request.body;
    
    const createLoadUseCase = container.resolve(CreateLoadUseCase);
    await createLoadUseCase.execute({ name, weight });

    return response.status(201).send();
  }
}

export { CreateLoadController };
