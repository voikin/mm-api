import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { Product, Ration } from './models/Ration'
import { RationsService } from './rations.service'
import { AccessTokenGuard } from 'src/auth/accessToken.guard'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/users/schemas/user.schema'

@ApiTags('Взаимодействие с рационами')
@Controller('rations')
export class RationsController {
    constructor(private rationsService: RationsService) {}

    @ApiOperation({ summary: 'Генерация ленты рационов' })
    @ApiResponse({ status: 200, type: [Ration] })
    @UseGuards(AccessTokenGuard)
    @Get('feed')
    async getFeed(): Promise<Ration[]> {
        return this.rationsService.getRationsFeed()
    }

    @ApiOperation({ summary: 'Генерация рациона' })
    @ApiResponse({ status: 200, type: Ration })
    @UseGuards(AccessTokenGuard)
    @Get('generate')
    async generateRation(@Request() req) {
        const { id } = req.user
        return this.rationsService.generateRation(id)
    }

    @ApiOperation({ summary: 'Выдача информации о юзере с рационами' })
    @ApiResponse({ status: 200, type: User })
    @UseGuards(AccessTokenGuard)
    @Get('user')
    async getFullInfo(@Request() req) {
        const { id } = req.user
        return this.rationsService.getFullUserInfo(id)
    }

    @ApiOperation({ summary: 'Подтверждение' })
    @ApiResponse({ status: 200, type: [Ration] })
    @UseGuards(AccessTokenGuard)
    @Post('confirm')
    async confirmRation(@Request() req, @Body() ration: Ration) {
        const { id } = req.user
        return this.rationsService.confirmRation(id, ration)
    }
}
