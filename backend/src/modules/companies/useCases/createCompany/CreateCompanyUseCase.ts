import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepositories';
import { ICompanyDTO, ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { Company } from '../../infra/typeorm/entities/Company';
import { ETypeUser } from '../../../accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateCompanyDTO): Promise<Company> {
    const { name, certification, loads, userId, city } = data;

    const userAlreadyExists = await this.usersRepository.findById(userId);

    if (!userAlreadyExists) throw new AppError(`user does not exists`);

    const typeUser = userAlreadyExists.type;
    const isCompany = typeUser === ETypeUser.COMPANY;

    if (!isCompany) throw new AppError('permission denied', 403);

    const companyAlreadyExists = await this.companiesRepository.findByName(
      name
    );

    if (companyAlreadyExists) throw new AppError('company already exists', 409);

    const companyCreated = this.companiesRepository.create({
      name,
      certification,
      loads,
      user: userAlreadyExists,
      city,
    });

    return companyCreated;
  }
}

export { CreateCompanyUseCase };
