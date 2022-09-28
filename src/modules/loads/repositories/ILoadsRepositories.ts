import { Load } from '../model/Load';

interface ILoadDTO {
  name: string;
  weight: number;
}

interface ILoadsRepository {
  findByName(name: string): Load;
  list(): Load[];
  create({ name, weight }: ILoadDTO): void;
}

export { ILoadsRepository, ILoadDTO };
