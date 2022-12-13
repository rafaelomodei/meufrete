import { User } from '../../accounts/infra/typeorm/entities/User';
import { Company } from '../../companies/infra/typeorm/entities/Company';
import { Load } from '../../loads/infra/typeorm/entities/Load';
import { Route } from '../../route/infra/typeorm/entities/Route';

enum EStatusFreight {
  AVAILABLE = 'available',
  PROGRESS = 'progress',
  FINISHED = 'finished',
}

interface ICreateFreightDTO {
  status: EStatusFreight;
  driver?: User;
  price: number;
  load: Load;
  route: Route;
}

interface IExecuteFreightDTO {
  status: EStatusFreight;
  price: number;
  load: Load;
  originCompany: Company;
  destinationCompany: Company;
}

export { ICreateFreightDTO, IExecuteFreightDTO, EStatusFreight };
