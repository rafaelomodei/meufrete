import { Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUserRepositories';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const { name, email, password, driverLicense, company } = data;
    const user = this.repository.create({
      name,
      email,
      password,
      driverLicense,
      company,
    });

    const userCreated = await this.repository.save(user);

    return userCreated;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
    });

    return user;
  }

  async findByDriverLicense(driverLicense: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { driverLicense },
    });

    return user;
  }
}

export { UsersRepository };
