import { ILoad } from './load';
import { IUser } from './user';

export interface ICompany {
  name: string;
  certification: boolean;
  loads?: Array<ILoad>;
  user?: IUser;
}
