import { inject, injectable } from 'tsyringe';
import { DistanceMatrix } from '../../../../services/DistanceMatrix';
import { AppError } from '../../../../shared/errors/AppErrors';
import { ICompaniesRepository } from '../../../companies/repositories/ICompaniesRepositories';
import { IRoutesRepository } from '../../../route/repositories/IRouteRepositories';
import { IExecuteFreightDTO } from '../../dtos/ICreateFreightDTO';
import { IFreightRepository } from '../../repositories/IFreightRepositories';

@injectable()
class CreateFreightUseCase {
  constructor(
    @inject('FreightsRepository')
    private freightRepository: IFreightRepository,

    @inject('CompaniesRepository')
    private companyRepository: ICompaniesRepository,

    @inject('RoutesRepository')
    private routesRepository: IRoutesRepository
  ) {}

  async execute(data: IExecuteFreightDTO): Promise<void> {
    const { price, load, status, originCompany, destinationCompany } = data;

    console.info('execute::originCompany: ', originCompany);

    const originCompanyAlreadyExists = await this.companyRepository.findById(
      originCompany.id
    );

    console.info(
      'originCompanyAlreadyExists::originCompany: ',
      originCompanyAlreadyExists
    );

    if (!originCompanyAlreadyExists)
      throw new AppError('origin company does not exists');

    const destinationCompanyAlreadyExists =
      await this.companyRepository.findById(destinationCompany.id);
    if (!destinationCompanyAlreadyExists)
      throw new AppError('destination company does not exists');

    const routeDistance = await DistanceMatrix(
      originCompanyAlreadyExists.city,
      destinationCompanyAlreadyExists.city
    );

    const route = await this.routesRepository.create({
      ...routeDistance,
      originCompany: originCompanyAlreadyExists,
      destinationCompany: destinationCompanyAlreadyExists,
    });

    await this.freightRepository.create({
      status,
      price,
      load,
      route,
    });
  }
}

export { CreateFreightUseCase };
