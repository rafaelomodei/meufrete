import { Load } from '../../model/Load';
import { ILoadsRepository, ILoadDTO } from '../ILoadsRepositories';

class LoadsRepository implements ILoadsRepository {
  private loads: Load[];

  private static INSTANCE: LoadsRepository;

  private constructor() {
    this.loads = [];
  }

  public static getInstance(): LoadsRepository {
    if (!LoadsRepository.INSTANCE)
    LoadsRepository.INSTANCE = new LoadsRepository();
    return LoadsRepository.INSTANCE;
  }

  create({ name, weight }: ILoadDTO): void {
    const load = new Load();

    const nameLoad = name.toLowerCase();

    Object.assign(load, {
      name: nameLoad,
      weight,
      createAt: new Date(),
    });

    this.loads.push(load);
  }

  list(): Load[] {
    return this.loads;
  }

  findByName(name: string): Load {
    const nameLoad = name.toLowerCase();
    const load = this.loads.find(
      (load) => load.name === nameLoad
    );

    return load;
  }
}

export { LoadsRepository };
