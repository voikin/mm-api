import { ApiProperty } from '@nestjs/swagger'

export class GenerateRationDto {
    @ApiProperty({
        example: [1, 2, 3, 4],
        description: 'Список ID попробованных рационов',
    })
    readonly triedRations: number[]

    @ApiProperty({
        example: [5, 6, 7, 8],
        description: 'Список ID предпочтений',
    })
    readonly preferences: number[]
}
