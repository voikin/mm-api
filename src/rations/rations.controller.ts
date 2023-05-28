import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { Product, Ration } from './models/Ration'
import { RationsService } from './rations.service'
import { AccessTokenGuard } from 'src/auth/accessToken.guard'

@Controller('rations')
export class RationsController {
    constructor(private rationsService: RationsService) {}

    @UseGuards(AccessTokenGuard)
    @Get('feed')
    async getFeed(): Promise<Ration[]> {
        return this.rationsService.getRationsFeed()
    }

    @UseGuards(AccessTokenGuard)
    @Get('generate')
    async generateRation(@Request() req) {
        const { id } = req.user
        return this.rationsService.generateRation(id)
    }

    @UseGuards(AccessTokenGuard)
    @Get('user')
    async getFullInfo(@Request() req) {
        const { id } = req.user
        return this.rationsService.getFullUserInfo(id)
    }

    @UseGuards(AccessTokenGuard)
    @Post('confirm')
    async confirmRation(@Request() req, @Body() ration: Ration) {
        const { id } = req.user
        return this.rationsService.confirmRation(id, ration)
    }
}
