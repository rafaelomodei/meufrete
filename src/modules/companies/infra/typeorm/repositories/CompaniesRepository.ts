import { Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { Company } from '../entities/Company';
import { ICompaniesRepository, ICompanyDTO } from '../../../repositories/ICompaniesRepositories';

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = AppDataSource.getRepository(Company);
  }

  async create({ name, certification, loads }: ICompanyDTO): Promise<void> {
    const company = this.repository.create({
      name,
      certification,
      loads,
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
