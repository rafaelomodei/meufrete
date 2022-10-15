import { inject, injectable } from 'tsyringe';
import { Company } from '../../entities/Company';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(): Promise<Company[]> {
    const companies = await this.companiesRepository.list();

    return companies;
  }
}

export { ListCompaniesUseCase };
