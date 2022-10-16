import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppErrors';
import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

interface IRequest {
  name: string;
  weight: number;
}

@injectable()
class CreateLoadUseCase {
  constructor(
    @inject('LoadsRepository')
    private loadsRepository: ILoadsRepository
  ) {}

  async execute({ name, weight }: IRequest): Promise<void> {
    const loadAlreadyExists = await this.loadsRepository.findByName(name);

    if (loadAlreadyExists) throw new AppError('load already exists', 409);

    this.loadsRepository.create({ name, weight });
  }
}

export { CreateLoadUseCase };
