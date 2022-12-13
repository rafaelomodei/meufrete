import { ICreateFreightDTO } from "../dtos/ICreateFreightDTO";
import { Freight } from "../infra/typeorm/entities/Freight";

interface IFreightRepository {
  create(data: ICreateFreightDTO): Promise<Freight>;
  findById(id: string): Promise<Freight>;
  list(): Promise<Freight[]>;
}

export { IFreightRepository };
