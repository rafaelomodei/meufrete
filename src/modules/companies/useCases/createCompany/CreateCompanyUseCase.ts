import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppErrors';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';

interface IRequest {
  name: string;
  certification: boolean;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute({ name, certification }: IRequest): Promise<void> {
    const companyAlreadyExists = await this.companiesRepository.findByName(
      name
    );

    if (companyAlreadyExists) throw new AppError('company already exists', 409);

    this.companiesRepository.create({ name, certification });
  }
}

export { CreateCompanyUseCase };
