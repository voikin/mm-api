import { ApiProperty } from '@nestjs/swagger'

export class GetUserInfoDto {
    @ApiProperty({
        example: '64637724e1f4dfe86da40726',
        description: 'ID запрашиваемого пользователя',
    })
    readonly userId: string

    @ApiProperty({
        example: ['parameters', 'preferences'],
        description: 'Запрашиваемые поля',
    })
    readonly fields?: string[]
}
