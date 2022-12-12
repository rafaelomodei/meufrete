import { ICompany } from './company';

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  driverLicense?: string;
  company?: ICompany;
}
