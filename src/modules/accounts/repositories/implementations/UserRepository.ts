import AppDataSource from '../../../../database/dataSource';
import { Repository } from 'typeorm';
import { IDriversRepository } from '../IUserRepositories';
import { Driver } from '../../entities/Driver';
import { ICreateDriverDTO } from '../../dtos/ICreateDriverDTO';

class DriversRepository implements IDriversRepository {
  private repository: Repository<Driver>;

  constructor() {
    this.repository = AppDataSource.getRepository(Driver);
  }

  async create(data: ICreateDriverDTO): Promise<void> {
    const { name, email, password, driverLicense } = data;
    const driver = this.repository.create({
      name,
      email,
      password,
      driverLicense,
    });

    await this.repository.save(driver);
  }

  async findByEmail(email: string): Promise<Driver> {
    const driver = await this.repository.findOne({
      where: { email },
    });

    return driver;
  }

  async findById(id: string): Promise<Driver> {
    const user = await this.repository.findOne({
      where: { id },
    });

    return user;
  }
}

export { DriversRepository };
