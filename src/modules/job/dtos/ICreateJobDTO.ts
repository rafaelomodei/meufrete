import { User } from '../../accounts/infra/typeorm/entities/User';
import { Freight } from '../../freight/infra/typeorm/entities/Freight';

interface ICreateJobDTO {
  status: string;
  driver?: User;
  freight: Freight;
}

interface IJoinJobDTO {
  jobId: string;
  driverId: string;
}

interface ISearchJobDTO {
  priceStart?: number;
  priceEnd?: number;
  weightStart?: number;
  weightEnd?: number;
  distanceStart?: number;
  distanceEnd?: number;
  originCity?: string;
  destinationCity?: string;
  originCompany?: string;
  destinationCompany?: string;
}

export { ICreateJobDTO, IJoinJobDTO, ISearchJobDTO };
