import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { Company } from '../../../companies/infra/typeorm/entities/Company';
import { Load } from '../../../loads/infra/typeorm/entities/Load';
import { EStatusFreight } from '../../dtos/ICreateFreightDTO';
import { CreateFreightUseCase } from './CreateFreightUseCase';

class CreateFreightController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { originCompany } = request.params;
    const { price, load, destinationCompany } = request.body;

    const createFreightUseCase = container.resolve(CreateFreightUseCase);

    const freight = await createFreightUseCase.execute({
      status: EStatusFreight.AVAILABLE,
      price,
      load,
      originCompany: { id: originCompany } as Company,
      destinationCompany,
    });

    return response.status(201).json(freight);
  }
}

export { CreateFreightController };
