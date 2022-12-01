import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ILoadDTO } from '../../infra/typeorm/dtos/ICreateLoadDTO';
import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

@injectable()
class CreateLoadUseCase {
  constructor(
    @inject('LoadsRepository')
    private loadsRepository: ILoadsRepository
  ) {}

  async execute({ name, weight }: ILoadDTO): Promise<void> {
    const loadAlreadyExists = await this.loadsRepository.findByName(name);

    if (loadAlreadyExists) throw new AppError('load already exists', 409);

    this.loadsRepository.create({ name, weight });
  }
}

export { CreateLoadUseCase };
