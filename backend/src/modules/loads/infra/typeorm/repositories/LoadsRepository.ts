import { In, Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { Load } from '../entities/Load';
import { ILoadsRepository } from '../../../repositories/ILoadsRepositories';
import { ILoadDTO } from '../dtos/ICreateLoadDTO';

class LoadsRepository implements ILoadsRepository {
  private repository: Repository<Load>;

  constructor() {
    this.repository = AppDataSource.getRepository(Load);
  }

  async create({ name, weight }: ILoadDTO): Promise<void> {
    const load = this.repository.create({
      name,
      weight,
    });

    await this.repository.save(load);
  }

  async list(): Promise<Load[]> {
    const loads = await this.repository.find();
    return loads;
  }

  async findByName(name: string): Promise<Load> {
    // const nameLoad = name.toLowerCase();
    const load = await this.repository.findOne({ where: { name } });

    return load;
  }

  async findByIds(ids: string[]): Promise<Load[]> {
    // const nameLoad = name.toLowerCase();
    const load = await this.repository.find({ where: { id: In(ids) } });

    return load;
  }
}

export { LoadsRepository };
