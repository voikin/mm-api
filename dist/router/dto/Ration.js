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
exports.Ration = exports.Product = void 0;
const swagger_1 = require("@nestjs/swagger");
class Product {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Цукаты',
        description: 'Название продукта',
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '50',
        description: 'Необходимый вес продукта (количество) в граммах',
    }),
    __metadata("design:type", String)
], Product.prototype, "value", void 0);
exports.Product = Product;
class Ration {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Кулич пасхальный от Кухня наизнанку',
        description: 'Название рецепта',
    }),
    __metadata("design:type", String)
], Ration.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1680',
        description: 'Вес блюда в граммах',
    }),
    __metadata("design:type", String)
], Ration.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5040',
        description: 'Количество калорий',
    }),
    __metadata("design:type", String)
], Ration.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
        description: 'Путь к изображению рецепта',
    }),
    __metadata("design:type", String)
], Ration.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                name: 'Цукаты',
                value: '50'
            },
            {
                name: 'Изюм Кишмиш',
                value: '50'
            },
            {
                name: 'Маргарин подсолнечный',
                value: '130'
            },
            {
                name: 'Йогурт греческий 10%',
                value: '75'
            },
            {
                name: 'Ванильный сахар',
                value: '8'
            },
            {
                name: 'Сахар-песок',
                value: '150'
            }
        ],
        description: 'Путь к изображению рецепта',
    }),
    __metadata("design:type", Product)
], Ration.prototype, "products", void 0);
exports.Ration = Ration;
//# sourceMappingURL=Ration.js.map