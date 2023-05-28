export class Ration {
    id?: string

    date?: Date

    monday: Recipe[]

    tuesday: Recipe[]

    wednesday: Recipe[]

    thursday: Recipe[]

    friday: Recipe[]

    saturday: Recipe[]

    sunday: Recipe[]
}

export class Recipe {

    name: string

    weight: number

    calories: number

    img: string

    url: string

    products: Product[]
}

export class Product {

    name: string

    weight: number
}