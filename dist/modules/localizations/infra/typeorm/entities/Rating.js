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
var Localization_1 = __importDefault(require("./Localization"));
var User_1 = __importDefault(require("@modules/users/infra/typeorm/entities/User"));
var Rating = /** @class */ (function () {
    function Rating() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Rating.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        __metadata("design:type", String)
    ], Rating.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return User_1.default; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.default)
    ], Rating.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        __metadata("design:type", String)
    ], Rating.prototype, "localization_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Localization_1.default; }, function (localization) { return localization.ratings; }),
        typeorm_1.JoinColumn({ name: 'localization_id' }),
        __metadata("design:type", Localization_1.default)
    ], Rating.prototype, "localizations", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Rating.prototype, "rating", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], Rating.prototype, "comment", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Rating.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Rating.prototype, "updated_at", void 0);
    Rating = __decorate([
        typeorm_1.Entity('ratings')
    ], Rating);
    return Rating;
}());
exports.default = Rating;
