"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeLocalizationsRepository = _interopRequireDefault(require("../repositories/fakes/FakeLocalizationsRepository"));

var _CreateLocalizationService = _interopRequireDefault(require("./CreateLocalizationService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeRepository;
let createLocalizationService;
let fakeCacheProvider;
describe('CreateLocalization', () => {
  beforeEach(() => {
    fakeRepository = new _FakeLocalizationsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    createLocalizationService = new _CreateLocalizationService.default(fakeRepository, fakeCacheProvider);
  });
  it('should be able to create a new localization', async () => {
    const localization = await createLocalizationService.execute({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999
    });
    expect(localization).toHaveProperty('id');
  });
});