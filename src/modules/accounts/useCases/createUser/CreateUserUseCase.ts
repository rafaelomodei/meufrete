import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../shared/errors/AppErrors';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driverLicense } = data;

    const emailUser = email.toLowerCase();
    const userAlreadyExists = await this.usersRepository.findByEmail(emailUser);
    if (userAlreadyExists) throw new AppError('Driver already exists', 409);

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driverLicense,
    });
  }
}

export { CreateUserUseCase };
