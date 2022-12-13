import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { Company } from '../../../companies/infra/typeorm/entities/Company';
import { EStatusFreight } from '../../dtos/ICreateFreightDTO';
import { Freight } from '../../infra/typeorm/entities/Freight';
import { JoinWorkUseCase } from './JoinWorkUseCase';

class JoinWorkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { freight } = request.params;
    const { user } = request.body;

    const joinWorkUseCase = container.resolve(JoinWorkUseCase);

    const work = await joinWorkUseCase.execute({
      freight: { id: freight } as Freight,
      user,
    });

    return response.status(201).json(work);
  }
}

export { JoinWorkController };
