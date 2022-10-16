import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateDriverUseCase } from './CreateUserUseCase';

class CreateDriverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driverLicense } = request.body;

    const createDriverUseCase = container.resolve(CreateDriverUseCase);

    await createDriverUseCase.execute({
      name,
      email,
      password,
      driverLicense,
    });

    return response.status(201).send();
  }
}

export { CreateDriverController };
