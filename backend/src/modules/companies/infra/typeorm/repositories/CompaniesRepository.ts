import { Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { Company } from '../entities/Company';
import { ICompaniesRepository } from '../../../repositories/ICompaniesRepositories';
import { ICompanyDTO } from '../../../dtos/ICreateCompanyDTO';

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = AppDataSource.getRepository(Company);
  }

  async create(data: ICompanyDTO): Promise<Company> {
    const { id, name, certification, loads, user, city } = data;

    const company = this.repository.create({
      id,
      name,
      certification,
      loads,
      user,
      city,
    });

    const companyCreated = await this.repository.save(company);

    return companyCreated;
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

  async findById(id: string): Promise<Company> {
    const company = await this.repository.findOne({
      where: { id },
    });

    return company;
  }

  // async findByLoadId(id: string): Promise<Load> {
  //   const load = await this.repository.findOne({
  //     where: { loads },
  //   });

  //   return load;
  // }
}

export { CompaniesRepository };
