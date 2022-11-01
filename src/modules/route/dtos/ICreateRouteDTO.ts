import { Company } from '../../companies/entities/Company';

interface ICreateRouteDTO {
  distance: number;
  originCity: string;
  destinationCity: string;
  originCompany: Company;
  destinationCompany: Company;
}

export { ICreateRouteDTO };
