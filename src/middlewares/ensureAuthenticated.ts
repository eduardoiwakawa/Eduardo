import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error('JWT faltando');
  }
  // Aqui seria [ type , token], porém como o type não será usado, pode ficar em branco
  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded as TokenPayload;
    // request.user = {
    //   id: sub,
    // };

    return next();
  } catch (error) {
    throw new Error('JWT Inválido');
  }
}
