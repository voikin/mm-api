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
exports.RationsController = void 0;
const common_1 = require("@nestjs/common");
const Ration_1 = require("./models/Ration");
const rations_service_1 = require("./rations.service");
const accessToken_guard_1 = require("../auth/accessToken.guard");
let RationsController = class RationsController {
    constructor(rationsService) {
        this.rationsService = rationsService;
    }
    async getFeed() {
        return this.rationsService.getRationsFeed();
    }
    async generateRation(req) {
        const { id } = req.user;
        return this.rationsService.generateRation(id);
    }
    async getFullInfo(req) {
        const { id } = req.user;
        return this.rationsService.getFullUserInfo(id);
    }
    async confirmRation(req, ration) {
        const { id } = req.user;
        return this.rationsService.confirmRation(id, ration);
    }
};
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('feed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RationsController.prototype, "getFeed", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('generate'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RationsController.prototype, "generateRation", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RationsController.prototype, "getFullInfo", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('confirm'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Ration_1.Ration]),
    __metadata("design:returntype", Promise)
], RationsController.prototype, "confirmRation", null);
RationsController = __decorate([
    (0, common_1.Controller)('rations'),
    __metadata("design:paramtypes", [rations_service_1.RationsService])
], RationsController);
exports.RationsController = RationsController;
//# sourceMappingURL=rations.controller.js.map