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
exports.Product = exports.Recipe = exports.Ration = void 0;
const swagger_1 = require("@nestjs/swagger");
class Ration {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '64736521bba8fc14a120c574',
        description: 'Идентификатор рациона (необязательное поле)'
    }),
    __metadata("design:type", String)
], Ration.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1685289982766,
        description: 'Временная метка добавления рациона пользователю (необязательное поле)'
    }),
    __metadata("design:type", Number)
], Ration.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на понедельник'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "monday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на вторник'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "tuesday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на среду'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "wednesday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на четверг'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "thursday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на пятницу'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "friday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на субботу'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "saturday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
        description: 'Список рецептов на воскресенья'
    }),
    __metadata("design:type", Array)
], Ration.prototype, "sunday", void 0);
exports.Ration = Ration;
class Recipe {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Омлет',
        description: 'Название рецепта',
    }),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 200,
        description: 'Вес блюда в граммах',
    }),
    __metadata("design:type", Number)
], Recipe.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 300,
        description: 'Калорийность блюда',
    }),
    __metadata("design:type", Number)
], Recipe.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://www.gastronom.ru/binfiles/images/20200320/b300e18f.jpg',
        description: 'Путь к изображению рецепта',
    }),
    __metadata("design:type", String)
], Recipe.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://www.gastronom.ru/recipe/11111/omlet-s-molokom-na-skovorode',
        description: 'Путь к полному рецепту',
    }),
    __metadata("design:type", String)
], Recipe.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                name: 'яйцо',
                weight: 200,
            },
            {
                name: 'молоко',
                weight: 120,
            },
            {
                name: 'растительное масло',
                weight: 3,
            },
            {
                name: 'сливочное масло',
                weight: 5,
            },
        ],
        description: 'Массив необходимых продуктов для приготовления рецепта',
    }),
    __metadata("design:type", Array)
], Recipe.prototype, "products", void 0);
exports.Recipe = Recipe;
class Product {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Помидоры',
        description: 'Название продукта',
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 150,
        description: 'Вес продукта в граммах',
    }),
    __metadata("design:type", Number)
], Product.prototype, "weight", void 0);
exports.Product = Product;
//# sourceMappingURL=Ration.js.map