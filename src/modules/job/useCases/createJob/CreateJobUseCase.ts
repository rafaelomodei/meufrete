import { inject, injectable } from 'tsyringe';
import { ICreateJobDTO } from '../../dtos/ICreateJobDTO';
import { IJobsRepository } from '../../repositories/IJobRepositories';

@injectable()
class CreateJobUseCase {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository
  ) {}

  async execute(data: ICreateJobDTO): Promise<void> {
    const { status, driver, freight } = data;

    await this.jobsRepository.create({
      status,
      driver,
      freight,
    });
  }
}

export { CreateJobUseCase };
