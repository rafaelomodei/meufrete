import { Load } from '../entities/Load';

interface ILoadDTO {
  name: string;
  weight: number;
}

interface ILoadsRepository {
  findByName(name: string): Promise<Load>;
  list(): Promise<Load[]>;
  create({ name, weight }: ILoadDTO): Promise<void>;
}

export { ILoadsRepository, ILoadDTO };
