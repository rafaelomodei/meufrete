import { Company } from '../../companies/infra/typeorm/entities/Company';
import { Freight } from '../../freight/infra/typeorm/entities/Freight';

enum ETypeUser {
  DRIVER = 'DRIVER',
  COMPANY = 'COMPANY',
}
interface ICreateUserDTO {
  type: ETypeUser;
  name: string;
  email: string;
  password: string;
  driverLicense?: string;
  company?: Company;
  freight?: Array<Freight>;
}

export { ICreateUserDTO, ETypeUser };
