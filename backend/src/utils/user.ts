import { Request } from 'express';
import { decode } from 'jsonwebtoken';

interface IPayloadUser {
  sub: string;
}

const currentUser = (request: Request): string => {
  const authHeader = request.headers.authorization;
  const [, token] = authHeader.split(' ');
  const { sub: user_id } = decode(token) as IPayloadUser;

  return user_id;
};

export default currentUser;
