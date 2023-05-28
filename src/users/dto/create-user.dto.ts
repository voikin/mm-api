import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class UserDto {
    @ApiProperty({
        example: 'JohnDoe@mail.com',
        description: 'Электронный адрес пользователя',
    })
    @IsEmail({}, { message: 'invalid email' })
    email: string

    @ApiProperty({
        example: 'qwerty123',
        description: 'Пароль пользователя',
    })
    @IsString({ message: 'password must be string type' })
    @Length(6, 20, { message: 'password must be in between 6 and 20 symbols' })
    readonly password: string

    @ApiProperty({
        example: 20,
        description: 'Возраст пользователя'
    })
    readonly age: number

    @ApiProperty({
        example: 75,
        description: 'Вес пользователя'
    })
    readonly weight: number

    @ApiProperty({
        example: 185,
        description: 'Рост пользователя'
    })
    readonly height: number

    @ApiProperty({
        example: 'male',
        description: 'Пол пользователя'
    })
    readonly sex: string | boolean
    
    activationLink: string
}
