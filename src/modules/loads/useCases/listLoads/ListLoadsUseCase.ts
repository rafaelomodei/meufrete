import { inject, injectable } from 'tsyringe';
import { Load } from '../../infra/typeorm/entities/Load';
import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

@injectable()
class ListLoadsUseCase {
  constructor(
    @inject('LoadsRepository')
    private loadsRepository: ILoadsRepository
  ) {}

  async execute(): Promise<Load[]> {
    const loads = await this.loadsRepository.list();

    return loads;
  }
}

export { ListLoadsUseCase };
