import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driverLicense, company } = request.body;

    const createDriverUseCase = container.resolve(CreateUserUseCase);

    const user = await createDriverUseCase.execute({
      name,
      email,
      password,
      driverLicense,
      company,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
