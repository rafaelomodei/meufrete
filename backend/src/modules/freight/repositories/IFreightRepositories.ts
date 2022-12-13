import {
  ICreateFreightDTO,
  IFinishWorkDTO,
  IJoinWorkDTO,
} from '../dtos/ICreateFreightDTO';
import { Freight } from '../infra/typeorm/entities/Freight';

interface IFreightRepository {
  create(data: ICreateFreightDTO): Promise<Freight>;
  join(data: IJoinWorkDTO): Promise<Freight>;
  finish(data: IFinishWorkDTO): Promise<Freight>;
  findById(id: string): Promise<Freight>;
  list(): Promise<Freight[]>;
}

export { IFreightRepository };
