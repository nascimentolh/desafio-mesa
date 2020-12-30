import FakeLocalizationsRepository from '../repositories/fakes/FakeLocalizationsRepository';
import CreateLocalizationService from './CreateLocalizationService';
describe('CreateLocalization', () => {
  it('should be able to create a new localization', async () => {
    const fakeRepository = new FakeLocalizationsRepository();
    const createLocalization = new CreateLocalizationService(fakeRepository);

    const localization = await createLocalization.execute({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999,
    });

    expect(localization).toHaveProperty('id');
  });
});
