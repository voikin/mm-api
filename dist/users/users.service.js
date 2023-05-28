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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(userDto) {
        const exist = await this.userModel.exists({
            email: userDto.email,
        });
        if (exist) {
            throw new common_1.BadRequestException('this username is already taken');
        }
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findByID(id) {
        return this.userModel.findById(id);
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async update(id, updateDto) {
        await this.userModel.findByIdAndUpdate(id, updateDto).exec();
        return this.userModel.findById(id);
    }
    async delete(id) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
    async getUser(query) {
        return this.userModel.findOne(query);
    }
    async existUser(userDto) {
        const count = await this.userModel.countDocuments({
            email: userDto.email,
        });
        return count > 0;
    }
    async activate(activationLink) {
        const user = await this.userModel.findOne({ activationLink });
        if (!user) {
            throw new common_1.BadRequestException('invalid link');
        }
        user.isActivated = true;
        await user.save();
    }
    async addPreference(id, preference) {
        const user = await this.findByID(id);
        user.preferences.push(preference);
        return user.save();
    }
    async removePreference(id, preference) {
        const user = await this.findByID(id);
        user.preferences = user.preferences.filter(pref => pref !== preference);
        return user.save();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map