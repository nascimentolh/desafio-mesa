"use strict";

require("reflect-metadata");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _AuthenticateUserService = _interopRequireDefault(require("./AuthenticateUserService"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let createUserService;
let authenticateUserService;
describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    createUserService = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider);
    authenticateUserService = new _AuthenticateUserService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to authenticate', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    const response = await authenticateUserService.execute({
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    expect(response).toHaveProperty('access_token');
  });
  it('should not be able to authenticate with non existing user', async () => {
    expect(authenticateUserService.execute({
      email: 'lorem@ipsum.com',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to authenticate with non matched password', async () => {
    await createUserService.execute({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    await expect(authenticateUserService.execute({
      email: 'lorem@ipsum.com',
      password: '123455'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});