import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class UserDto {
    @ApiProperty({
        example: 'JohnDoe@mail.com',
        description: 'user`s email',
    })
    @IsEmail({}, { message: 'invalid email' })
    email: string

    @ApiProperty({
        example: 'qwerty123',
        description: 'Users`s password',
    })
    @IsString({ message: 'password must be string type' })
    @Length(6, 20, { message: 'password must be in between 6 and 20 symbols' })
    readonly password: string

    readonly age: number

    readonly weight: number

    readonly height: number

    readonly sex: boolean
    
    activationLink: string
}
