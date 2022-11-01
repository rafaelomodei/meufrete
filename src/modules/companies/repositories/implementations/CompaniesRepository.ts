import { Repository } from 'typeorm';
import AppDataSource from '../../../../database/dataSource';
import { Company } from '../../entities/Company';
import { ICompaniesRepository, ICompanyDTO } from '../ICompaniesRepositories';

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = AppDataSource.getRepository(Company);
  }

  async create({ name, certification, listLoads }: ICompanyDTO): Promise<void> {
    const company = this.repository.create({
      name,
      certification,
      listLoads,
    });

    await this.repository.save(company);
  }

  async list(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies;
  }

  async findByName(name: string): Promise<Company> {
    // const nameCompany = name.toLowerCase();
    const company = await this.repository.findOne({
      where: { name },
    });

    return company;
  }
}

export { CompaniesRepository };
