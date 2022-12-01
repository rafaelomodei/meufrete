import { Company } from '../infra/typeorm/entities/Company';
import { ICompanyDTO } from '../dtos/ICreateCompanyDTO';
interface ICompaniesRepository {
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  create(data: ICompanyDTO): Promise<void>;
  findById(id: string): Promise<Company>;
}

export { ICompaniesRepository };
