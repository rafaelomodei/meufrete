import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppErrors';
import { IDriversRepository } from '../../repositories/IUserRepositories';

interface IResquest {
  email: string;
  password: string;
}

interface IResposen {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateDriverUseCase {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository
  ) {}

  async execute({ email, password }: IResquest): Promise<IResposen> {
    const driver = await this.driversRepository.findByEmail(email);
    if (!driver) throw new AppError('Email or password incorrect', 401);

    const passwordMarch = await compare(password, driver.password);
    if (!passwordMarch) throw new AppError('Email or password incorrect', 401);

    const token = sign({}, '2882a785cc81943344d27f105c35bc0f', {
      subject: driver.id,
      expiresIn: '1d',
    });

    return {
      user: {
        name: driver.name,
        email: driver.email,
      },
      token,
    };
  }
}

export { AuthenticateDriverUseCase };
