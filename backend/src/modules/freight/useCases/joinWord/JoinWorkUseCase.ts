import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
import { EStatusFreight, IJoinWorkDTO } from '../../dtos/ICreateFreightDTO';
import { Freight } from '../../infra/typeorm/entities/Freight';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class JoinWorkUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(freightId: string, userId: string): Promise<void> {
    const freightAlreadyExists = await this.freightRepository.findById(
      freightId
    );

    if (!freightAlreadyExists) throw new AppError('freight does not exists');
    if (freightAlreadyExists.status !== EStatusFreight.AVAILABLE)
      throw new AppError('freight not available', 409);

    const userAlreadyExists = await this.usersRepository.findById(userId);

    if (!userAlreadyExists) throw new AppError('user does not exists');

    await this.freightRepository.join({
      freight: freightAlreadyExists,
      user: userAlreadyExists,
    });
  }
}

export { JoinWorkUseCase };
