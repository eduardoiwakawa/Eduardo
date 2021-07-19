import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const retorno = {
      nome: user.name,
      email: user.email,
      id: user.id,
      criadoEm: user.created_at,
      atualizadoEm: user.updated_at,
    };

    return response.json(retorno);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

export default userRouter;
