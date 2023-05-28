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
exports.RouterController = void 0;
const common_1 = require("@nestjs/common");
const generate_ration_dto_1 = require("./dto/generate-ration.dto");
const get_user_info_dto_1 = require("./dto/get-user-info.dto");
const router_service_1 = require("./router.service");
const accessToken_guard_1 = require("../auth/accessToken.guard");
const swagger_1 = require("@nestjs/swagger");
const Ration_1 = require("./dto/Ration");
const UserInfo_1 = require("./dto/UserInfo");
let RouterController = class RouterController {
    constructor(routerService) {
        this.routerService = routerService;
    }
    getRationsFeed() {
        return this.routerService.getRationsFeed();
    }
    generateRation(dto) {
        return this.routerService.generateRation();
    }
    getUserInfo(dto) {
        return this.routerService.getUserInfo(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Генерация ленты рационов' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [Ration_1.Ration] }),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('rations/feed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RouterController.prototype, "getRationsFeed", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Генерация ленты рационов' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: Ration_1.Ration }),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('rations/generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_ration_dto_1.GenerateRationDto]),
    __metadata("design:returntype", void 0)
], RouterController.prototype, "generateRation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Запрос данных пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [UserInfo_1.UserInfoUnit] }),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_info_dto_1.GetUserInfoDto]),
    __metadata("design:returntype", void 0)
], RouterController.prototype, "getUserInfo", null);
RouterController = __decorate([
    (0, swagger_1.ApiTags)('Маршрутизатор запросов между сервисами', 'Только авторизованные'),
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [router_service_1.RouterService])
], RouterController);
exports.RouterController = RouterController;
//# sourceMappingURL=router.controller.js.map