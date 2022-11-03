import { ILoadDTO } from '../infra/typeorm/dtos/ICreateLoadDTO';
import { Load } from '../infra/typeorm/entities/Load';

interface ILoadsRepository {
  findByName(name: string): Promise<Load>;
  list(): Promise<Load[]>;
  create({ name, weight }: ILoadDTO): Promise<void>;
  findByIds(ids: string[]): Promise<Load[]>;
}

export { ILoadsRepository };
