import { Load } from '../../loads/infra/typeorm/entities/Load';
import { Route } from '../../route/infra/typeorm/entities/Route';

interface ICreateFreightDTO {
  price: number;
  route: Route;
  load: Load;
}

export { ICreateFreightDTO };
