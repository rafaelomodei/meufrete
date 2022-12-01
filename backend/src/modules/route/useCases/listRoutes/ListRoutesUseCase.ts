import { inject, injectable } from 'tsyringe';
import { Route } from '../../infra/typeorm/entities/Route';
import { IRoutesRepository } from '../../repositories/IRouteRepositories';

@injectable()
class ListRoutesUseCase {
  constructor(
    @inject('RoutesRepository')
    private routesRepository: IRoutesRepository
  ) {}

  async execute(): Promise<Route[]> {
    const routes = await this.routesRepository.list();

    return routes;
  }
}

export { ListRoutesUseCase };
