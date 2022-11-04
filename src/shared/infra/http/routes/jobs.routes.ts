import { Router } from 'express';
import { CreateJobController } from '../../../../modules/job/useCases/createJob/CreateJobController';
import { JoinJobsController } from '../../../../modules/job/useCases/joinJob/JoinJobController';
import { ListJobsController } from '../../../../modules/job/useCases/listJob/ListJobsController';

const jobsRoutes = Router();

const createJobsController = new CreateJobController();
const listJobsController = new ListJobsController();
const joinJobsController = new JoinJobsController();


jobsRoutes.post('/', createJobsController.handle);
jobsRoutes.get('/', listJobsController.handle);
jobsRoutes.post('/:id', joinJobsController.handle);


export { jobsRoutes };
