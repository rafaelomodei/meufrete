import { Load } from '../../entities/Load';
import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

class ListLoadsUseCase {
  constructor(private loadsRepository: ILoadsRepository) {}

  execute(): Load[] {
    const loads = this.loadsRepository.list();

    return loads;
  }
}

export { ListLoadsUseCase };
