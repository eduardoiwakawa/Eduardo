/* eslint-disable camelcase */
import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

interface Resposta {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  token: string;
}

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({ email, password });

    const data: Resposta = {
      email: user.email,
      name: user.name,
      password: user.password,
      id: user.id,
      created_at: user.created_at,
      token,
    };
    delete data.password;
    return response.json({ data });
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

export default sessionsRouter;
