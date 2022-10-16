import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IDriversRepository } from '../../repositories/IUserRepositories';
import { ICreateDriverDTO } from '../../dtos/ICreateDriverDTO';

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
    if (driverAlreadyExists) throw new Error('Driver already exists');

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