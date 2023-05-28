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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetUserInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '64637724e1f4dfe86da40726',
        description: 'ID запрашиваемого пользователя',
    }),
    __metadata("design:type", String)
], GetUserInfoDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['parameters', 'preferences'],
        description: 'Запрашиваемые поля',
    }),
    __metadata("design:type", Array)
], GetUserInfoDto.prototype, "fields", void 0);
exports.GetUserInfoDto = GetUserInfoDto;
//# sourceMappingURL=get-user-info.dto.js.map