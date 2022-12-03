import { ICompany } from './company';

export interface IUser {
  name: string;
  email: string;
  password?: string;
  driverLicense?: string;
  company?: ICompany;
}
