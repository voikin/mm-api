import { ApiProperty } from '@nestjs/swagger'

export class UserInfoUnit {
    @ApiProperty({
        example: 'parameters',
        description: 'Запрашиваемое поле',
    })
    field: string

    @ApiProperty({
        example: {
            age: 20,
            weight: 75,
            height: 186,
        },
        description: 'Запрашиваемое поле',
    })
    value: any
}
