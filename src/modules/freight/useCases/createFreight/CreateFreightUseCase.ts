import { inject, injectable } from 'tsyringe';
import { ICreateFreightDTO } from '../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class CreateFreightUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository
  ) {}

  async execute(data: ICreateFreightDTO): Promise<void> {
    const { price, route, load } = data;

    await this.freightRepository.create({
      price,
      route,
      load,
    });
  }
}

export { CreateFreightUseCase };
