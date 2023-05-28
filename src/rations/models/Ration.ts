import { ApiProperty } from '@nestjs/swagger'

export class Ration {
    @ApiProperty({
        example: '64736521bba8fc14a120c574',
        description: 'Идентификатор рациона (необязательное поле)'
    })
    id?: string

    @ApiProperty({
        example: 1685289982766,
        description: 'Временная метка добавления рациона пользователю (необязательное поле)'
    })
    date?: number

    @ApiProperty({
        example: [],
        description: 'Список рецептов на понедельник'
    })
    monday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на вторник'
    })
    tuesday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на среду'
    })
    wednesday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на четверг'
    })
    thursday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на пятницу'
    })
    friday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на субботу'
    })
    saturday: Recipe[]

    @ApiProperty({
        example: [],
        description: 'Список рецептов на воскресенья'
    })
    sunday: Recipe[]
}

export class Recipe {
    @ApiProperty({
        example: 'Омлет',
        description: 'Название рецепта',
    })
    name: string

    @ApiProperty({
        example: 200,
        description: 'Вес блюда в граммах',
    })
    weight: number

    @ApiProperty({
        example: 300,
        description: 'Калорийность блюда',
    })
    calories: number

    @ApiProperty({
        example:
            'https://www.gastronom.ru/binfiles/images/20200320/b300e18f.jpg',
        description: 'Путь к изображению рецепта',
    })
    img: string

    @ApiProperty({
        example:
            'https://www.gastronom.ru/recipe/11111/omlet-s-molokom-na-skovorode',
        description: 'Путь к полному рецепту',
    })
    url: string

    @ApiProperty({
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
    })
    products: Product[]
}

export class Product {
    @ApiProperty({
        example: 'Помидоры',
        description: 'Название продукта',
    })
    name: string

    @ApiProperty({
        example: 150,
        description: 'Вес продукта в граммах',
    })
    weight: number
}
