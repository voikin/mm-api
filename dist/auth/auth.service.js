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
exports.AuthService = void 0;
const token_service_1 = require("./token/token.service");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mail_service_1 = require("./mail/mail.service");
const auth_dto_1 = require("./dto/auth.dto");
let AuthService = class AuthService {
    constructor(usersService, mailService, tokenService) {
        this.usersService = usersService;
        this.mailService = mailService;
        this.tokenService = tokenService;
    }
    async signup(userDto) {
        const user = await this.usersService.existUser(userDto);
        if (user) {
            console.log(user);
            throw new common_1.BadRequestException('this email is already exist');
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const activationLink = uuid.v4();
        const newUser = await this.usersService.create(Object.assign(Object.assign({}, userDto), { activationLink, password: hashPassword }));
        return this.mailService.sendActivationMail(newUser.email, `${process.env.API_URL}/auth/activate/${activationLink}`);
    }
    async login(userDto) {
        const user = await this.usersService.findByEmail(userDto.email);
        if (!user) {
            throw new common_1.BadRequestException('invalid email');
        }
        const isPassEquals = await bcrypt.compare(userDto.password, user.password);
        if (!isPassEquals) {
            throw new common_1.BadRequestException('invalid password');
        }
        if (!user.isActivated) {
            throw new common_1.ForbiddenException('email is not confirmed');
        }
        const authDto = new auth_dto_1.AuthDto(user);
        const tokens = await this.tokenService.generateToken(Object.assign({}, authDto));
        await this.tokenService.saveToken(user._id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { authDto });
    }
    async logout(refreshToken) {
        return this.tokenService.removeToken(refreshToken);
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        const userData = await this.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDN = this.tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDN) {
            throw new common_1.UnauthorizedException();
        }
        const user = await this.usersService.findByID(userData.id);
        const authDto = new auth_dto_1.AuthDto(user);
        const tokens = await this.tokenService.generateToken(Object.assign({}, authDto));
        await this.tokenService.saveToken(authDto.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { authDto });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mail_service_1.MailService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map