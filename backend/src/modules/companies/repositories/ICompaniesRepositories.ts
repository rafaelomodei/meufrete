import { Company } from '../infra/typeorm/entities/Company';
import { ICompanyDTO } from '../dtos/ICreateCompanyDTO';
interface ICompaniesRepository {
  create(data: ICompanyDTO): Promise<Company>;
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  findById(id: string): Promise<Company>;
}

export { ICompaniesRepository };
