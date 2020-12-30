import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const authRouter = Router();
const usersRepository = new UsersRepository();

authRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, access_token } = await authenticateUser.execute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, access_token });
});

export default authRouter;
