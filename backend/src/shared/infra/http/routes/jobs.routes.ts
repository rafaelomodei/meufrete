import { Router } from 'express';
import { CreateJobController } from '../../../../modules/job/useCases/createJob/CreateJobController';
import { JoinJobsController } from '../../../../modules/job/useCases/joinJob/JoinJobController';
import { ListJobsController } from '../../../../modules/job/useCases/listJob/ListJobsController';
import { SearchJobsController } from '../../../../modules/job/useCases/searchJob/SearchJobsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const jobsRoutes = Router();

const createJobsController = new CreateJobController();
const listJobsController = new ListJobsController();
const joinJobsController = new JoinJobsController();
const searchJobsController = new SearchJobsController();

jobsRoutes.post('/', ensureAuthenticated, createJobsController.handle);
jobsRoutes.get('/', ensureAuthenticated, listJobsController.handle);
jobsRoutes.post('/search', ensureAuthenticated, searchJobsController.handle);
jobsRoutes.post('/:id', ensureAuthenticated, joinJobsController.handle);

export { jobsRoutes };
