import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateDriverUseCase } from './AuthenticateDriverUseCase';

class AuthenticateDriverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUseCase = container.resolve(AuthenticateDriverUseCase);
    const token = await authenticateUseCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateDriverController };
