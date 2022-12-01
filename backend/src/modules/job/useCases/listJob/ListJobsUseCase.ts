import { inject, injectable } from 'tsyringe';
import { Job } from '../../infra/typeorm/entities/Job';
import { IJobsRepository } from '../../repositories/IJobRepositories';

@injectable()
class ListJobsUseCase {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository
  ) {}

  async execute(): Promise<Job[]> {
    const jobs = await this.jobsRepository.list();

    return jobs;
  }
}

export { ListJobsUseCase };
