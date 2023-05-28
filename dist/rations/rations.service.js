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
exports.RationsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let RationsService = class RationsService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getRationsFeed() {
        return fetch('http://generator:8000/list').then((res) => res.json());
    }
    async getRationsByIds(ids) {
        return fetch('http://generator:8000/getRationByIds', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids.map(el => el.rationId)),
        }).then((res) => res.json());
    }
    async saveSelectedRation(ration) {
        console.log(JSON.stringify(ration));
        return fetch('http://generator:8000/createRation', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ration),
        }).then((res) => res.json());
    }
    async generateRation(id) {
        const { weight, height, age, sex } = await this.usersService.findByID(id);
        let calories;
        if (sex) {
            calories =
                (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) *
                    1.375;
        }
        else {
            calories =
                (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * 1.375;
        }
        return fetch(`http://generator:8000/generateRation/${Math.floor(calories)}`).then((res) => res.json());
    }
    async getProducts() {
        return fetch('http://generator:8000/products').then((res) => res.json());
    }
    async getFullUserInfo(id) {
        const user = await this.usersService.findByID(id);
        const triedRations = await this.getRationsByIds(user.triedRations);
        const userFromDB = user.toObject();
        for (let i = 0; i < triedRations.length; i++) {
            userFromDB.triedRations[i] = Object.assign(Object.assign({}, (userFromDB.triedRations[i])), (triedRations[i]));
            console.log(userFromDB.triedRations[i]);
        }
        return userFromDB;
    }
    async confirmRation(id, ration) {
        const rationId = await this.saveSelectedRation(ration);
        const user = await this.usersService.findByID(id);
        user.triedRations.push({
            rationId: rationId,
            date: Date.now(),
        });
        return user.save();
    }
};
RationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], RationsService);
exports.RationsService = RationsService;
//# sourceMappingURL=rations.service.js.map