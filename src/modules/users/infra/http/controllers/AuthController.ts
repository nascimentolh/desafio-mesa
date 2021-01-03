import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserFormat from '@modules/users/helpers/UserFormat';

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

    const userFormat = new UserFormat();
    const parsedUser = userFormat.userFormat(user);

    return response.json({ user: parsedUser, access_token });
  }
}
