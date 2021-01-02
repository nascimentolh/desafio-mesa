import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeLocalizationsRepository from '../repositories/fakes/FakeLocalizationsRepository';
import ListLocalizationsService from './ListLocalizationsService';

let fakeRepository: FakeLocalizationsRepository;
let listLocalizationsService: ListLocalizationsService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListLocalizations', () => {
  beforeEach(() => {
    fakeRepository = new FakeLocalizationsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listLocalizationsService = new ListLocalizationsService(
      fakeRepository,
      fakeCacheProvider,
    );
  });
  it('should be able list localizations', async () => {
    await fakeRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });

    await fakeRepository.create({
      name: 'Teste1',
      lng: -14.9999999,
      lat: -19.999999,
    });

    await fakeRepository.create({
      name: 'Teste2',
      lng: -14.9999999,
      lat: -19.999999,
    });

    const localization = await listLocalizationsService.list({
      user_id: '1',
      query: 'list',
    });

    expect(localization).toHaveLength(3);
  });

  it('should be able list localizations mode view map', async () => {
    await fakeRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });

    await fakeRepository.create({
      name: 'Teste1',
      lng: -14.9999999,
      lat: -19.999999,
    });

    await fakeRepository.create({
      name: 'Teste2',
      lng: -14.9999999,
      lat: -19.999999,
    });

    const localization = await listLocalizationsService.list({
      user_id: '1',
      query: 'map',
    });

    expect(localization).toHaveLength(1);
  });
});
