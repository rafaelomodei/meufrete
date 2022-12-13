import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';
import { ICompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { Company } from '../../infra/typeorm/entities/Company';
@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(data: ICompanyDTO): Promise<Company> {
    const { name, certification, loads, user, city } = data;

    const companyAlreadyExists = await this.companiesRepository.findByName(
      name
    );

    if (companyAlreadyExists) throw new AppError('company already exists', 409);

    const companyCreated = this.companiesRepository.create({
      name,
      certification,
      loads,
      user,
      city,
    });

    return companyCreated;
  }
}

export { CreateCompanyUseCase };
