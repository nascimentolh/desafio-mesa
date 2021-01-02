"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateLocalizationService = _interopRequireDefault(require("../../../services/CreateLocalizationService"));

var _ListLocalizationsService = _interopRequireDefault(require("../../../services/ListLocalizationsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocalizationsController {
  async index(request, response) {
    const listLocalizations = _tsyringe.container.resolve(_ListLocalizationsService.default);

    const localizations = await listLocalizations.list({
      user_id: request.user.id,
      query: request.query.type
    });
    return response.json(localizations);
  }

  async create(request, response) {
    const {
      name,
      lng,
      lat
    } = request.body;

    const createLocalization = _tsyringe.container.resolve(_CreateLocalizationService.default);

    const localization = await createLocalization.execute({
      name,
      lng,
      lat
    });
    return response.json(localization);
  }

}

exports.default = LocalizationsController;