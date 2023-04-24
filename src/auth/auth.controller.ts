import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common'
import { UserDto } from 'src/users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { UsersService } from 'src/users/users.service'
import { AccessTokenGuard } from './accessToken.guard'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService,
    ) {}

    @Post('signup')
    async signup(@Body() userDto: UserDto): Promise<void> {
        await this.authService.signup(userDto)
    }

    @Post('login')
    async login(@Body() userDto: UserDto, @Res() res: Response) {
        const authData = await this.authService.login(userDto)
        res.cookie('refreshToken', authData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        })
        return res.json({
            accessToken: authData.accessToken,
            authDto: authData.authDto,
        })
    }

    @UseGuards(AccessTokenGuard)
    @Get('logout')
    async logout(@Req() req: Request, @Res() res: Response) {
        const { refreshToken } = req.cookies
        await this.authService.logout(refreshToken)
        res.clearCookie('refreshToken')
        res.end()
    }

    @Get('activate/:link')
    async activate(@Param('link') link: string, @Res() res: Response) {
        await this.userService.activate(link)
        return res.redirect(process.env.CLIENT_URL)
    }

    @Get('refresh')
    async refresh(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { refreshToken } = req.cookies
        const authData = await this.authService.refresh(refreshToken)
        res.cookie('refreshToken', authData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        })
        res.json({
            accessToken: authData.accessToken,
            authDto: authData.authDto,
        })
    }
}
