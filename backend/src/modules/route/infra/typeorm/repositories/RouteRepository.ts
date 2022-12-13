import { Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { ICreateRouteDTO } from '../../../dtos/ICreateRouteDTO';
import { IRoutesRepository } from '../../../repositories/IRouteRepositories';
import { Route } from '../entities/Route';

class RoutesRepository implements IRoutesRepository {
  private repository: Repository<Route>;

  constructor() {
    this.repository = AppDataSource.getRepository(Route);
  }

  async create(data: ICreateRouteDTO): Promise<Route> {
    const {
      distance,
      originCity,
      destinationCity,
      originCompany,
      destinationCompany,
    } = data;
    const route = this.repository.create({
      distance,
      originCity,
      destinationCity,
      originCompany,
      destinationCompany,
    });

    const routeCreated = await this.repository.save(route);

    return routeCreated;
  }

  async findById(id: string): Promise<Route> {
    const route = await this.repository.findOne({
      where: { id },
    });

    return route;
  }

  async list(): Promise<Route[]> {
    const routes = await this.repository.find();
    return routes;
  }
}

export { RoutesRepository };
