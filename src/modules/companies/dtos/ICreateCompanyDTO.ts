import { Load } from '../../loads/infra/typeorm/entities/Load';

interface ICompanyDTO {
  id?: string;
  name: string;
  certification: boolean;
  loads?: Load[];
}

export { ICompanyDTO };
