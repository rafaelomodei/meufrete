import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateFreightUseCase } from './CreateFreightUseCase';

class CreateFreightController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { price, route, load } = request.body;

    const createFreightUseCase = container.resolve(CreateFreightUseCase);

    const freight = await createFreightUseCase.execute({
      price,
      route,
      load,
    });

    return response.status(201).json(freight);
  }
}

export { CreateFreightController };
