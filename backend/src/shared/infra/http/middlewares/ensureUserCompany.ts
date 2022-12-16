import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppErrors';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { config as envConfig } from 'dotenv';
import { ETypeUser } from '../../../../modules/accounts/dtos/ICreateUserDTO';
envConfig();
const { env } = process;

interface IPayload {
  sub: string;
}

export async function ensureUserCompany(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 401);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = decode(token) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    const typeUser = user.type;

    const isCompany = typeUser === ETypeUser.COMPANY;

    if (!isCompany) throw new AppError('User does not permission', 403);

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
