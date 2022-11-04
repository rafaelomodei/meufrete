import { ICreateJobDTO } from "../dtos/ICreateJobDTO";
import { Job } from "../infra/typeorm/entities/Job";

interface IJobsRepository {
  create(data: ICreateJobDTO): Promise<void>;
  remove(id: string): Promise<Job>;
  findById(id: string): Promise<Job>;
  list(): Promise<Job[]>;
}

export { IJobsRepository };
