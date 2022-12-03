import { ICompany } from './company';

export interface IUser {
  name: string;
  email: string;
  driverLicense?: string;
  company?: ICompany;
}
