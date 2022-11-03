import { Company } from '../infra/typeorm/entities/Company';
import { ICompanyDTO} from '../dtos/ICreateCompanyDTO';
interface ICompaniesRepository {
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  create({ name, certification, loads }: ICompanyDTO): Promise<void>;
}

export { ICompaniesRepository, ICompanyDTO };
