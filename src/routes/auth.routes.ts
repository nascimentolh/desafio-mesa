import { Router } from 'express';
import AuthenticateUserService from 'services/AuthenticateUserService';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, access_token } = await authenticateUser.execute({
      email,
      password,
    });
    delete user.password;

    return response.json({ user, access_token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default authRouter;
