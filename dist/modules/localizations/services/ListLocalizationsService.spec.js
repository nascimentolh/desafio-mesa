"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeLocalizationsRepository = _interopRequireDefault(require("../repositories/fakes/FakeLocalizationsRepository"));

var _ListLocalizationsService = _interopRequireDefault(require("./ListLocalizationsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeRepository;
let listLocalizationsService;
let fakeCacheProvider;
describe('ListLocalizations', () => {
  beforeEach(() => {
    fakeRepository = new _FakeLocalizationsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listLocalizationsService = new _ListLocalizationsService.default(fakeRepository, fakeCacheProvider);
  });
  it('should be able list localizations', async () => {
    await fakeRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999
    });
    await fakeRepository.create({
      name: 'Teste1',
      lng: -14.9999999,
      lat: -19.999999
    });
    await fakeRepository.create({
      name: 'Teste2',
      lng: -14.9999999,
      lat: -19.999999
    });
    const localization = await listLocalizationsService.list({
      user_id: '1',
      query: 'list'
    });
    expect(localization).toHaveLength(3);
  });
  it('should be able list localizations mode view map', async () => {
    await fakeRepository.create({
      name: 'Teste',
      lng: -14.9999999,
      lat: -19.999999
    });
    await fakeRepository.create({
      name: 'Teste1',
      lng: -14.9999999,
      lat: -19.999999
    });
    await fakeRepository.create({
      name: 'Teste2',
      lng: -14.9999999,
      lat: -19.999999
    });
    const localization = await listLocalizationsService.list({
      user_id: '1',
      query: 'map'
    });
    expect(localization).toHaveLength(1);
  });
});