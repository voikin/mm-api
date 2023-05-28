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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("./schemas/user.schema");
const create_user_dto_1 = require("./dto/create-user.dto");
const accessToken_guard_1 = require("../auth/accessToken.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(userDto) {
        return this.usersService.create(userDto);
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findByID(id) {
        return this.usersService.findByID(id);
    }
    async update(req, updateDto) {
        const userId = req.user.id;
        console.log(req);
        return this.usersService.update(userId, updateDto);
    }
    async delete(id) {
        return this.usersService.delete(id);
    }
    async addPreference(req, preference) {
        const { id } = req.user;
        return this.usersService.addPreference(id, preference);
    }
    async removePreference(req, preference) {
        const { id } = req.user;
        return this.usersService.removePreference(id, preference);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creating a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: user_schema_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Getting all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [user_schema_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Getting user by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findByID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Updating users by id' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: user_schema_1.User }),
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Deleting user by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление предпочтения' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: user_schema_1.User }),
    (0, common_1.Put)('preference/:pref'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('pref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addPreference", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление предпочтения' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Delete)('preference/:pref'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('pref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removePreference", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Пользователи'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map