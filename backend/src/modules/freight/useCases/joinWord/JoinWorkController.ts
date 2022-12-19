import { Response, Request } from 'express';
import { container } from 'tsyringe';
import currentUser from '../../../../utils/user';
import { JoinWorkUseCase } from './JoinWorkUseCase';

class JoinWorkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { freight } = request.params;
    const userId = currentUser(request);

    const joinWorkUseCase = container.resolve(JoinWorkUseCase);

    const work = await joinWorkUseCase.execute(freight, userId);

    return response.status(200).json(work);
  }
}

export { JoinWorkController };
