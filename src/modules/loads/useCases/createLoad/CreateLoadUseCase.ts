import { inject, injectable } from 'tsyringe';
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

    if (loadAlreadyExists) throw new Error('load already exists');

    this.loadsRepository.create({ name, weight });
  }
}

export { CreateLoadUseCase };
