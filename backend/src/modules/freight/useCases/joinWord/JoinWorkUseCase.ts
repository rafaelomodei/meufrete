import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
import { IJoinWorkDTO } from '../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class JoinWorkUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IJoinWorkDTO): Promise<void> {
    const { freight, user } = data;

    const freightAlreadyExists = await this.freightRepository.findById(
      freight.id
    );

    if (!freightAlreadyExists) throw new AppError('freight does not exists');

    const userAlreadyExists = await this.usersRepository.findById(user.id);

    if (!userAlreadyExists) throw new AppError('user does not exists');

    await this.freightRepository.join({
      freight: freightAlreadyExists,
      user: userAlreadyExists,
    });
  }
}

export { JoinWorkUseCase };
