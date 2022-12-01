import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../../accounts/repositories/IUserRepositories';
import { IJoinJobDTO } from '../../dtos/ICreateJobDTO';
import { Job } from '../../infra/typeorm/entities/Job';
import { IJobsRepository } from '../../repositories/IJobRepositories';

@injectable()
class JoinJobUseCase {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ jobId, driverId }: IJoinJobDTO): Promise<void> {
    const jobAlreadyExists = await this.jobsRepository.findById(jobId);

    if (!jobAlreadyExists) throw new AppError('job does not exists');

    if (jobAlreadyExists.driver) throw new AppError('job not available');

    const driverAlreadyExists = await this.usersRepository.findById(driverId);

    if (!driverAlreadyExists) throw new AppError('driver does not exists');

    jobAlreadyExists.driver = driverAlreadyExists;

    const jobRemoved = await this.jobsRepository.remove(jobId);
    if (!jobRemoved) throw new AppError('job not removed');

    await this.jobsRepository.create(jobAlreadyExists);
  }
}

export { JoinJobUseCase };
