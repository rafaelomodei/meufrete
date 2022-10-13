import { Request, Response } from 'express';
import { CreateLoadUseCase } from './CreateLoadUseCase';

class CreateLoadController {
  constructor(private createLoadUseCase: CreateLoadUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, weight } = request.body;

    await this.createLoadUseCase.execute({ name, weight });

    return response.status(201).send();
  }
}

export { CreateLoadController };
