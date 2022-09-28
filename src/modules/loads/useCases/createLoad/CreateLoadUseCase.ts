import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

interface IRequest {
  name: string;
  weight: number;
}

class CreateLoadUseCase {
  constructor(private loadsRepository: ILoadsRepository) {}

  execute({ name, weight }: IRequest): void {
    const loadAlreadyExists = this.loadsRepository.findByName(name);

    if (loadAlreadyExists) throw new Error('load already exists');

    this.loadsRepository.create({ name, weight });
  }
}

export { CreateLoadUseCase };
