"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Rating_1 = __importDefault(require("./Rating"));
var Localization = /** @class */ (function () {
    function Localization() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Localization.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Localization.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Localization.prototype, "lng", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Localization.prototype, "lat", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Rating_1.default; }, function (ratings) { return ratings.localizations; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", Rating_1.default)
    ], Localization.prototype, "ratings", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Localization.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Localization.prototype, "updated_at", void 0);
    Localization = __decorate([
        typeorm_1.Entity('localizations')
    ], Localization);
    return Localization;
}());
exports.default = Localization;
