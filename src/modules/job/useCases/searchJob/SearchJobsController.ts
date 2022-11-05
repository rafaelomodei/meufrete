import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { ISearchJobDTO } from '../../dtos/ICreateJobDTO';
import { SearchJobsUseCase } from './SearchJobsUseCase';

class SearchJobsController {
  async handle(request: Request, response: Response): Promise<Response> {
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
    } = request.body;

    const search: ISearchJobDTO = {
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
    };

    const searchJobsUseCase = container.resolve(SearchJobsUseCase);
    const foundJobs = await searchJobsUseCase.execute(search);

    return response.json(foundJobs);
  }
}

export { SearchJobsController };
