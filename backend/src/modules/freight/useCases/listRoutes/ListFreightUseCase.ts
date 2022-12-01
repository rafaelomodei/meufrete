import { inject, injectable } from 'tsyringe';
import { Freight } from '../../infra/typeorm/entities/Freight';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class ListFreightUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightsRepository: IFreightRepository
  ) {}

  async execute(): Promise<Freight[]> {
    const freights = await this.freightsRepository.list();

    return freights;
  }
}

export { ListFreightUseCase };
