import AppDataSource from '../../../../database/dataSource';
import { Repository } from 'typeorm';
import { IRoutesRepository } from '../IRouteRepositories';
import { Route } from '../../entities/Route';
import { ICreateRouteDTO } from '../../dtos/ICreateRouteDTO';

class RoutesRepository implements IRoutesRepository {
  private repository: Repository<Route>;

  constructor() {
    this.repository = AppDataSource.getRepository(Route);
  }

  async create(data: ICreateRouteDTO): Promise<void> {
    const { distance, originCity, destinationCity } = data;
    const route = this.repository.create({
      distance,
      originCity,
      destinationCity,
    });

    await this.repository.save(route);
  }

  async findById(id: string): Promise<Route> {
    const route = await this.repository.findOne({
      where: { id },
    });

    return route;
  }
}

export { RoutesRepository };
