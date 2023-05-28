"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterService = void 0;
const common_1 = require("@nestjs/common");
let RouterService = class RouterService {
    async getUserInfo(dto) {
        const res = await fetch('http://users:3000/users', {
            body: JSON.stringify(dto),
            method: 'POST',
        });
        const userInfo = await res.json();
        return userInfo;
    }
    async getRationsFeed() {
        const res = await fetch('http://generator:8000/list');
        const feed = await res.json();
        return feed;
    }
    async generateRation() {
        const res = await fetch('http://generator:8000/ration');
        const ration = await res.json();
        return ration;
    }
};
RouterService = __decorate([
    (0, common_1.Injectable)()
], RouterService);
exports.RouterService = RouterService;
//# sourceMappingURL=router.service.js.map