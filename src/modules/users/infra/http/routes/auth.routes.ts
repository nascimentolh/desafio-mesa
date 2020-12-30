import { Router } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, access_token } = await authenticateUser.execute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, access_token });
});

export default authRouter;
