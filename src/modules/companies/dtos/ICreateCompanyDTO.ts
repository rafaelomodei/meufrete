import { Load } from '../../loads/infra/typeorm/entities/Load';

interface ICompanyDTO {
  name: string;
  certification: boolean;
  loads: [Load];
}

export { ICompanyDTO };
