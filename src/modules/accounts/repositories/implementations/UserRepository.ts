import AppDataSource from '../../../../database/dataSource';
import { Repository } from 'typeorm';
import { IUsersRepository } from '../IUserRepositories';
import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driverLicense } = data;
    const user = this.repository.create({
      name,
      email,
      password,
      driverLicense,
    });

    await this.repository.save(user);
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
}

export { UsersRepository };
