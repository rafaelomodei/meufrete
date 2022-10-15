import { Company } from '../entities/Company';

interface ICompanyDTO {
  name: string;
  certification: boolean;
}

interface ICompaniesRepository {
  findByName(name: string): Promise<Company>;
  list(): Promise<Company[]>;
  create({ name, certification }: ICompanyDTO): Promise<void>;
}

export { ICompaniesRepository, ICompanyDTO };
