import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
import { IFinishWorkDTO } from '../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class FinishWorkUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository
  ) {}

  async execute(data: IFinishWorkDTO): Promise<void> {
    const { freight } = data;

    console.info('freight: ', freight);
    const freightAlreadyExists = await this.freightRepository.findById(
      freight.id
    );

    if (!freightAlreadyExists) throw new AppError('freight does not exists');

    await this.freightRepository.finish({
      freight: freightAlreadyExists,
    });
  }
}

export { FinishWorkUseCase };
