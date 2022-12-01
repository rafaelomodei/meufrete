import { Between, ILike, In, Like, Repository } from 'typeorm';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { ICreateJobDTO, ISearchJobDTO } from '../../../dtos/ICreateJobDTO';
import { IJobsRepository } from '../../../repositories/IJobRepositories';
import { Job } from '../entities/Job';

class JobsRepository implements IJobsRepository {
  private repository: Repository<Job>;

  constructor() {
    this.repository = AppDataSource.getRepository(Job);
  }

  async create(data: ICreateJobDTO): Promise<void> {
    const { status, driver, freight } = data;
    const job = this.repository.create({
      status,
      driver,
      freight,
    });

    await this.repository.save(job);
  }

  async remove(id: string): Promise<Job> {
    const job = await this.repository.findOne({
      where: { id },
    });

    await this.repository.remove(job);

    return job;
  }

  async list(): Promise<Job[]> {
    const jobs = await this.repository.find();
    return jobs;
  }

  async findById(id: string): Promise<Job> {
    const job = await this.repository.findOne({
      where: { id },
    });

    return job;
  }

  async search(data: ISearchJobDTO): Promise<Job[]> {
    const {
      priceStart,
      priceEnd,
      weightStart,
      weightEnd,
      distanceStart,
      distanceEnd,
      originCity,
      destinationCity,
      originCompany,
      destinationCompany,
    } = data;

    const hasOriginCompany = originCompany
      ? {
          name: ILike(`%${originCompany}%`),
        }
      : null;

    const hasDestinationCompany = destinationCompany
      ? {
          name: ILike(`%${destinationCompany}%`),
        }
      : null;

    const jobs = await this.repository.find({
      where: {
        freight: {
          price: Between(priceStart || 0, priceEnd || 9999999999),
          load: {
            weight: Between(weightStart || 0, weightEnd || 9999999999),
          },
          route: {
            distance: Between(distanceStart || 0, distanceEnd || 9999999999),
            originCity: ILike(`%${originCity}%`),
            destinationCity: ILike(`%${destinationCity}%`),
            originCompany: { ...hasOriginCompany },
            destinationCompany: { ...hasDestinationCompany },
          },
        },
      },
    });

    return jobs;
  }
}

export { JobsRepository };
