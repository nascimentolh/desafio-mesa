import UserFormat from '@modules/users/helpers/UserFormat';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    const userFormat = new UserFormat();
    const parsedUser = userFormat.userFormat(user);

    return response.json(parsedUser);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    const updateProfile = container.resolve(UpdateUserService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    const userFormat = new UserFormat();
    const parsedUser = userFormat.userFormat(user);

    return response.json(parsedUser);
  }
}
