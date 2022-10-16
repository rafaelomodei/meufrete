import { ICreateDriverDTO } from "../dtos/ICreateDriverDTO";
import { Driver } from "../entities/Driver";

interface IDriversRepository {
  create(data: ICreateDriverDTO): Promise<void>;
  findByEmail(email: string): Promise<Driver>;
}

export { IDriversRepository };
