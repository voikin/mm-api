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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'JohnDoe@mail.com',
        description: 'Электронный адрес пользователя',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'invalid email' }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'qwerty123',
        description: 'Пароль пользователя',
    }),
    (0, class_validator_1.IsString)({ message: 'password must be string type' }),
    (0, class_validator_1.Length)(6, 20, { message: 'password must be in between 6 and 20 symbols' }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 20,
        description: 'Возраст пользователя'
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 75,
        description: 'Вес пользователя'
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 185,
        description: 'Рост пользователя'
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'male',
        description: 'Пол пользователя'
    }),
    __metadata("design:type", Object)
], UserDto.prototype, "sex", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=create-user.dto.js.map