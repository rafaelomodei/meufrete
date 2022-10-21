import { inject, injectable } from 'tsyringe';
import { IRoutesRepository } from '../../repositories/IRouteRepositories';
import { ICreateRouteDTO } from '../../dtos/ICreateRouteDTO';

@injectable()
class CreateRouteUseCase {
  constructor(
    @inject('RoutesRepository')
    private routesRepository: IRoutesRepository
  ) {}

  async execute(data: ICreateRouteDTO): Promise<void> {
    const { distance, originCity, destinationCity } = data;

    await this.routesRepository.create({
      distance,
      originCity,
      destinationCity,
    });
  }
}

export { CreateRouteUseCase };
