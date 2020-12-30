import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class AuthController {
  public async authenticate(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, access_token } = await authenticateUser.execute({
      email,
      password,
    });
    delete user.password;

    return response.json({ user, access_token });
  }
}
