import { inject, injectable } from 'tsyringe';
import { ISearchJobDTO } from '../../dtos/ICreateJobDTO';
import { Job } from '../../infra/typeorm/entities/Job';
import { IJobsRepository } from '../../repositories/IJobRepositories';

@injectable()
class SearchJobsUseCase {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository
  ) {}

  async execute(data: ISearchJobDTO): Promise<Job[]> {
    const jobs = await this.jobsRepository.search(data);

    return jobs;
  }
}

export { SearchJobsUseCase };
