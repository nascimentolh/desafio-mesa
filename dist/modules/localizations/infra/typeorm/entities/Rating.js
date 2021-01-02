"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Localization = _interopRequireDefault(require("./Localization"));

var _User = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/User"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Rating = (_dec = (0, _typeorm.Entity)('ratings'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)('uuid'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.OneToOne)(() => _User.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'user_id'
}), _dec8 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec9 = (0, _typeorm.Column)('uuid'), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.ManyToOne)(() => _Localization.default, localization => localization.ratings), _dec12 = (0, _typeorm.JoinColumn)({
  name: 'localization_id'
}), _dec13 = Reflect.metadata("design:type", typeof _Localization.default === "undefined" ? Object : _Localization.default), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", Number), _dec16 = (0, _typeorm.Column)('text'), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.CreateDateColumn)(), _dec19 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec20 = (0, _typeorm.UpdateDateColumn)(), _dec21 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = (_temp = class Rating {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "user_id", _descriptor2, this);

    _initializerDefineProperty(this, "user", _descriptor3, this);

    _initializerDefineProperty(this, "localization_id", _descriptor4, this);

    _initializerDefineProperty(this, "localizations", _descriptor5, this);

    _initializerDefineProperty(this, "rating", _descriptor6, this);

    _initializerDefineProperty(this, "comment", _descriptor7, this);

    _initializerDefineProperty(this, "created_at", _descriptor8, this);

    _initializerDefineProperty(this, "updated_at", _descriptor9, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "localization_id", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "localizations", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rating", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "comment", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Rating;
exports.default = _default;