import { Company } from '../../companies/infra/typeorm/entities/Company';

interface ICreateRouteDTO {
  distance: number;
  originCity: string;
  destinationCity: string;
  originCompany: Company;
  destinationCompany: Company;
}

export { ICreateRouteDTO };
