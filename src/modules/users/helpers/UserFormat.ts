import User from '../infra/typeorm/entities/User';

interface IUserData {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

export default class UserFormat {
  public userFormat(user: User): IUserData {
    const parsed = user as IUserData;
    delete parsed.password;
    return parsed;
  }
}
