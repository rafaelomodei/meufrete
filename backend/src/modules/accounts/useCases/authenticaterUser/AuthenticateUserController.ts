import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUsersUseCase } from './AuthenticateUserUseCase';

class AuthenticateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUseCase = container.resolve(AuthenticateUsersUseCase);
    const token = await authenticateUseCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateUsersController };
