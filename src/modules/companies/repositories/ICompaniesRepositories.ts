import { Company } from '../infra/typeorm/entities/Company';
import { ICompanyDTO } from '../dtos/ICreateCompanyDTO';
import { Load } from '../../loads/infra/typeorm/entities/Load';
interface ICompaniesRepository {
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  create({ id, name, certification, loads }: ICompanyDTO): Promise<void>;
  findById(id: string): Promise<Company>;
}

export { ICompaniesRepository, ICompanyDTO };
