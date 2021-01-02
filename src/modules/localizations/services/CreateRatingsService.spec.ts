import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeRatingsRepository from '../repositories/fakes/FakeRatingsRepository';
import CreateRatingsService from './CreateRatingsService';
import FakeLocalizationRepository from '../repositories/fakes/FakeLocalizationsRepository';
import AppError from '@shared/errors/AppError';

let fakeRepository: FakeRatingsRepository;
let createRatingsService: CreateRatingsService;
let fakeCacheProvider: FakeCacheProvider;
let fakeUsersRepository: FakeUsersRepository;
let fakeLocalizationsRepository: FakeLocalizationRepository;

describe('CreateRating', () => {
  beforeEach(() => {
    fakeRepository = new FakeRatingsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    fakeUsersRepository = new FakeUsersRepository();
    fakeLocalizationsRepository = new FakeLocalizationRepository();

    createRatingsService = new CreateRatingsService(
      fakeRepository,
      fakeCacheProvider,
    );
  });
  it('should be able to create a new rating', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '1234',
    });

    const localization = await fakeLocalizationsRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });
    const rating = await createRatingsService.execute({
      user_id: user.id,
      localization_id: localization.id,
      rating: 5,
      comment: 'This is a test',
    });

    expect(rating).toHaveProperty('id');
  });

  it('should not be able to create a new rating with rating wrong', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Sr.Lorem',
      email: 'lorem@ipsum.com',
      password: '1234',
    });

    const localization = await fakeLocalizationsRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });

    await expect(
      createRatingsService.execute({
        user_id: user.id,
        localization_id: localization.id,
        rating: 6,
        comment: 'This is a test',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
