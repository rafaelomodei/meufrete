import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppErrors';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 401);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '2882a785cc81943344d27f105c35bc0f'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) throw new AppError('User does not exist', 401);

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
