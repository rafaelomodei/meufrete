import { User } from '../../accounts/infra/typeorm/entities/User';
import { Load } from '../../loads/infra/typeorm/entities/Load';

interface ICompanyDTO {
  id?: string;
  name: string;
  city: string;
  certification: boolean;
  loads?: Load[];
  user?: User;
}

interface ICreateCompanyDTO {
  id?: string;
  name: string;
  city: string;
  certification: boolean;
  loads?: Load[];
  userId: string;
}
export { ICompanyDTO, ICreateCompanyDTO };
