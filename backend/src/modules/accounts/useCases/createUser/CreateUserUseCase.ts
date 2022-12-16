import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { ICreateUserDTO, ETypeUser } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../shared/errors/AppErrors';
import { User } from '../../infra/typeorm/entities/User';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const { type, name, email, password, driverLicense, company } = data;

    const verifyTypeUser = ETypeUser[type];

    if (!verifyTypeUser) throw new AppError(`Type user don't exist`);

    const emailUser = email.toLowerCase();
    const userAlreadyExists = await this.usersRepository.findByEmail(emailUser);
    // const driverAlreadyExists = await this.usersRepository.findByDriverLicense(
    //   driverLicense
    // );

    if (userAlreadyExists) throw new AppError('User already exists', 409);
    // if (driverAlreadyExists) throw new AppError('Driver already exists', 409);

    const passwordHash = await hash(password, 8);
    const user = {
      type: type,
      name: name.toLowerCase(),
      password: passwordHash,
      email: email.toLowerCase(),
      driverLicense,
      company,
    };
    const userCreated = await this.usersRepository.create(user);

    console.info('\nuserCreated: ', userCreated);
    return userCreated;
  }
}

export { CreateUserUseCase };
