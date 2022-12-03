import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';
import { ICompanyDTO } from '../../dtos/ICreateCompanyDTO';
@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(data: ICompanyDTO): Promise<void> {
    const { name, certification, loads, user } = data;

    const companyAlreadyExists = await this.companiesRepository.findByName(
      name
    );

    if (companyAlreadyExists) throw new AppError('company already exists', 409);

    this.companiesRepository.create({ name, certification, loads, user });
  }
}

export { CreateCompanyUseCase };