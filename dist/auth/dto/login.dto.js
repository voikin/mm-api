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
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./auth.dto");
class LoginDto {
    constructor(accessToken, authDto) {
        this.accessToken = accessToken;
        this.authDto = authDto;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMzbnZrbkBnbWFpbC5jb20iLCJpZCI6IjY0NDY4ZDFlNmRkZDk1NTBjODAxNzU0OSIsImlzQWN0aXZhdGVkIjp0cnVlLCJpYXQiOjE2ODIzNDUyNzAsImV4cCI6MTY4MjM0NzA3MH0.kt-650XrBE4zpviJHhRGpQ5x4njELDyCG8TxCVxX1Fs',
        description: 'unique jwt token which using for any request',
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            email: 'johndoe@mail.com',
            _id: '64468d1e6ddd9550c8017549',
            isActivated: false,
        },
        description: 'service information about the user',
    }),
    __metadata("design:type", auth_dto_1.AuthDto)
], LoginDto.prototype, "authDto", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map