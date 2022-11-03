import { Router } from 'express';
import { CreateJobController } from '../../../../modules/job/useCases/createJob/CreateJobController';
import { ListJobsController } from '../../../../modules/job/useCases/listJob/ListJobsController';

const jobsRoutes = Router();

const createJobsController = new CreateJobController();
const listJobsController = new ListJobsController();

jobsRoutes.post('/', createJobsController.handle);
jobsRoutes.get('/', listJobsController.handle);

export { jobsRoutes };
