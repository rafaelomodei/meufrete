import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { DistanceMatrix } from '../../../../services/DistanceMatrix';
import { CreateRouteUseCase } from './CreateRouteUseCase';

class CreateRouterController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { originCity, destinationCity, originCompany, destinationCompany } =
      request.body;

    const createRouteUseCase = container.resolve(CreateRouteUseCase);

    const route = await DistanceMatrix(originCity, destinationCity);

    await createRouteUseCase.execute({
      ...route,
      originCompany,
      destinationCompany,
    });

    return response.status(201).send();
  }
}

export { CreateRouterController };
