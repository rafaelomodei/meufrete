import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';
import { verify, decode } from 'jsonwebtoken';

interface IPayloadUser {
  sub: string;
}
class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, certification, loads, city } = request.body;
    const authHeader = request.headers.authorization;
    const [, token] = authHeader.split(' ');
    const { sub: user_id } = decode(token) as IPayloadUser;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const companyCreated = await createCompanyUseCase.execute({
      name,
      certification,
      loads,
      userId: user_id,
      city,
    });

    return response.status(201).json(companyCreated);
  }
}

export { CreateCompanyController };
