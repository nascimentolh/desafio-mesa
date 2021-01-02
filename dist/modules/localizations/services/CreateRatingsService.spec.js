"use strict";

var _FakeUsersRepository = _interopRequireDefault(require("../../users/repositories/fakes/FakeUsersRepository"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeRatingsRepository = _interopRequireDefault(require("../repositories/fakes/FakeRatingsRepository"));

var _CreateRatingsService = _interopRequireDefault(require("./CreateRatingsService"));

var _FakeLocalizationsRepository = _interopRequireDefault(require("../repositories/fakes/FakeLocalizationsRepository"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeRepository;
let createRatingsService;
let fakeCacheProvider;
let fakeUsersRepository;
let fakeLocalizationsRepository;
describe('CreateRating', () => {
  beforeEach(() => {
    fakeRepository = new _FakeRatingsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeLocalizationsRepository = new _FakeLocalizationsRepository.default();
    createRatingsService = new _CreateRatingsService.default(fakeRepository, fakeCacheProvider);
  });
  it('should be able to create a new rating', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '1234'
    });
    const localization = await fakeLocalizationsRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999
    });
    const rating = await createRatingsService.execute({
      user_id: user.id,
      localization_id: localization.id,
      rating: 5,
      comment: 'This is a test'
    });
    expect(rating).toHaveProperty('id');
  });
  it('should not be able to create a new rating with rating wrong', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '1234'
    });
    const localization = await fakeLocalizationsRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999
    });
    await expect(createRatingsService.execute({
      user_id: user.id,
      localization_id: localization.id,
      rating: 6,
      comment: 'This is a test'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});