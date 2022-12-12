import { Company } from '../../companies/infra/typeorm/entities/Company';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driverLicense?: string;
  company?: Company;
}

export { ICreateUserDTO };
