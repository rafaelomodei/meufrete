import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const nameCategory = name.toLowerCase();

    this.createSpecificationUseCase.execute({
      name: nameCategory,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
