import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../errors/AppErrors';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { config as envConfig } from 'dotenv';
import { ETypeUser } from '../../../../modules/accounts/dtos/ICreateUserDTO';
import currentUser from '../../../../utils/user';
envConfig();

export async function ensureUserDriver(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 401);

  try {
    const userId = currentUser(request);
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId);

    const typeUser = user.type;

    const isCompany = typeUser === ETypeUser.DRIVER;

    if (!isCompany) throw new AppError('User does not permission', 403);

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
