import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { Freight } from '../../infra/typeorm/entities/Freight';
import { FinishWorkUseCase } from './FinishWorkUseCase';

class FinishWorkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { freight } = request.params;

    const finishWorkUseCase = container.resolve(FinishWorkUseCase);

    const work = await finishWorkUseCase.execute({
      freight: { id: freight } as Freight,
    });

    return response.status(200).json(work);
  }
}

export { FinishWorkController };
