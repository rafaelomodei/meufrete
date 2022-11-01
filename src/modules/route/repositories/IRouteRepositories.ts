import { ICreateRouteDTO } from "../dtos/ICreateRouteDTO";
import { Route } from "../entities/Route";

interface IRoutesRepository {
  create(data: ICreateRouteDTO): Promise<void>;
  findById(id: string): Promise<Route>;
  list(): Promise<Route[]>;
}

export { IRoutesRepository };
