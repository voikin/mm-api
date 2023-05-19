import { ApiProperty } from '@nestjs/swagger'

export class Product {
    @ApiProperty({
        example: 'Цукаты',
        description: 'Название продукта',
    })
    name: string

    @ApiProperty({
        example: '50',
        description: 'Необходимый вес продукта (количество) в граммах',
    })
    value: string
}

export class Ration {
    @ApiProperty({
        example: 'Кулич пасхальный от Кухня наизнанку',
        description: 'Название рецепта',
    })
    name: string

    @ApiProperty({
        example: '1680',
        description: 'Вес блюда в граммах',
    })
    weight: string

    @ApiProperty({
        example: '5040',
        description: 'Количество калорий',
    })
    calories: string

    @ApiProperty({
        example:
            'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
        description: 'Путь к изображению рецепта',
    })
    photo: string

    @ApiProperty({
        example:
            [
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
    })
    products: Product
}
