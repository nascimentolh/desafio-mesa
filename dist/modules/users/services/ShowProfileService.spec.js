"use strict";

require("reflect-metadata");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _ShowProfileService = _interopRequireDefault(require("./ShowProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let showProfileService;
describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    showProfileService = new _ShowProfileService.default(fakeUsersRepository);
  });
  it('should be able show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '123456'
    });
    const profile = await showProfileService.execute({
      user_id: user.id
    });
    expect(profile.name).toBe('Sr.Lorem');
    expect(profile.email).toBe('lorem@ipsum.com');
  });
  it('should not be able show the profile from non existing user', async () => {
    await expect(showProfileService.execute({
      user_id: 'non-existing-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});