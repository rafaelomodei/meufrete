import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
import { EStatusFreight, IFinishWorkDTO } from '../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class FinishWorkUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository
  ) {}

  async execute(data: IFinishWorkDTO): Promise<void> {
    const { freight } = data;

    const freightAlreadyExists = await this.freightRepository.findById(
      freight.id
    );

    if (!freightAlreadyExists) throw new AppError('freight does not exists');

    if (freightAlreadyExists.status === EStatusFreight.FINISHED)
      throw new AppError('freight already completed', 417);

    if (freightAlreadyExists.status !== EStatusFreight.PROGRESS)
      throw new AppError('freight is not in progress', 409);
    await this.freightRepository.finish({
      freight: freightAlreadyExists,
    });
  }
}

export { FinishWorkUseCase };
