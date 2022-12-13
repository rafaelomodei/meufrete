import { Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { ICreateFreightDTO } from '../../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../../repositories/IFreightRepositories';
import { Freight } from '../entities/Freight';

class FreightRepository implements IFreightRepository {
  private repository: Repository<Freight>;

  constructor() {
    this.repository = AppDataSource.getRepository(Freight);
  }

  async create(data: ICreateFreightDTO): Promise<Freight> {
    const { price, route, load, status } = data;

    const freight = this.repository.create({
      status,
      price,
      route,
      load,
    });

    const freightCreated = await this.repository.save(freight);

    return freightCreated;
  }

  async findById(id: string): Promise<Freight> {
    const freight = await this.repository.findOne({
      where: { id },
    });

    return freight;
  }

  async list(): Promise<Freight[]> {
    const freights = await this.repository.find();
    return freights;
  }
}

export { FreightRepository };
