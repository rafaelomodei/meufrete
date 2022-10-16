import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IDriversRepository } from '../../repositories/IUserRepositories';
import { ICreateDriverDTO } from '../../dtos/ICreateDriverDTO';
import { AppError } from '../../../../errors/AppErrors';

@injectable()
class CreateDriverUseCase {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository
  ) {}

  async execute(data: ICreateDriverDTO): Promise<void> {
    const { name, email, password, driverLicense } = data;

    const emailDriver = email.toLowerCase();
    const driverAlreadyExists = await this.driversRepository.findByEmail(emailDriver);
    if (driverAlreadyExists) throw new AppError('Driver already exists', 409);

    const passwordHash = await hash(password, 8);

    await this.driversRepository.create({
      name,
      password: passwordHash,
      email,
      driverLicense,
    });
  }
}

export { CreateDriverUseCase };
