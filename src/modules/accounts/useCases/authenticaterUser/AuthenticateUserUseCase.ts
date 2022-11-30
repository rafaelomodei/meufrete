import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { config as envConfig } from 'dotenv';
envConfig();
const { env } = process;

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
class AuthenticateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IResquest): Promise<IResposen> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError('Email or password incorrect', 401);

    const passwordMarch = await compare(password, user.password);
    if (!passwordMarch) throw new AppError('Email or password incorrect', 401);

    const token = sign({}, `${env.KEY_JWT}`, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUsersUseCase };
