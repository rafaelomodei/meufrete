import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ILoadsRepository } from '../../../loads/repositories/ILoadsRepositories';
import { Company } from '../../infra/typeorm/entities/Company';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';

interface IRequest {
  companyId: string;
  loadsId: string[];
}

@injectable()
class CreateLoadsToCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('LoadsRepository')
    private loadsRepository: ILoadsRepository
  ) {}

  async execute({ companyId, loadsId }: IRequest): Promise<Company> {
    const companyAlreadyExists = await this.companiesRepository.findById(
      companyId
    );

    if (!companyAlreadyExists) throw new AppError('company does not exists');

    const loads = await this.loadsRepository.findByIds(loadsId);

    companyAlreadyExists.loads = loads;

    this.companiesRepository.create(companyAlreadyExists);

    return companyAlreadyExists;
  }
}

export { CreateLoadsToCompanyUseCase };
