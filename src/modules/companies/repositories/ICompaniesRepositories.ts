import { Company } from '../entities/Company';
import { ICompanyDTO} from '../dtos/ICreateCompanyDTO';
interface ICompaniesRepository {
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  create({ name, certification, listLoads }: ICompanyDTO): Promise<void>;
}

export { ICompaniesRepository, ICompanyDTO };
