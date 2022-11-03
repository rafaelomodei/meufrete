import { User } from '../../accounts/infra/typeorm/entities/User';
import { Freight } from '../../freight/infra/typeorm/entities/Freight';

interface ICreateJobDTO {
  status: string;
  driver?: User;
  freight: Freight;
}

export { ICreateJobDTO };
