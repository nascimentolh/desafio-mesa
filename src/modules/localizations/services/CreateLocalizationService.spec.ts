import FakeLocalizationsRepository from '../repositories/fakes/FakeLocalizationsRepository';
import CreateLocalizationService from './CreateLocalizationService';

let fakeRepository: FakeLocalizationsRepository;
let createLocalizationService: CreateLocalizationService;

describe('CreateLocalization', () => {
  beforeEach(() => {
    fakeRepository = new FakeLocalizationsRepository();
    createLocalizationService = new CreateLocalizationService(fakeRepository);
  });
  it('should be able to create a new localization', async () => {
    const localization = await createLocalizationService.execute({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });

    expect(localization).toHaveProperty('id');
  });
});
