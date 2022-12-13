import { Company } from '../../companies/infra/typeorm/entities/Company';
import { Freight } from '../../freight/infra/typeorm/entities/Freight';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driverLicense?: string;
  company?: Company;
  freight?: Array<Freight>;
}

export { ICreateUserDTO };
