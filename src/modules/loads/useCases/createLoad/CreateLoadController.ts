import { Request, Response } from 'express';
import { CreateLoadUseCase } from './CreateLoadUseCase';

class CreateLoadController {
  constructor(private createLoadUseCase: CreateLoadUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, weight } = request.body;

    this.createLoadUseCase.execute({ name, weight });

    return response.status(201).send();
  }
}

export { CreateLoadController };
