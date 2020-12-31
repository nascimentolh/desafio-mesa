import FakeLocalizationsRepository from '../repositories/fakes/FakeLocalizationsRepository';
import ListLocalizationsService from './ListLocalizationsService';

let fakeRepository: FakeLocalizationsRepository;
let listLocalizationsService: ListLocalizationsService;

describe('ListLocalizations', () => {
  beforeEach(() => {
    fakeRepository = new FakeLocalizationsRepository();
    listLocalizationsService = new ListLocalizationsService(fakeRepository);
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

    const localization = await listLocalizationsService.list();

    expect(localization).toHaveLength(3);
  });
});
