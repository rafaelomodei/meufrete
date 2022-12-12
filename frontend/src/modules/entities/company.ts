import { ILoad } from './load';

type IUser = {
  id: string;
};

export interface ICompany {
  name: string;
  certification: boolean;
  loads?: Array<ILoad>;
  user?: IUser;
}
