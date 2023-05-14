import { Body, Controller, Get, Post } from '@nestjs/common'
import { GenerateRationDto } from './dto/generate-ration.dto'
import { GetUserInfoDto } from './dto/get-user-info.dto'
import { RouterService } from './router.service'

@Controller('api')
export class RouterController {
    constructor(private routerService: RouterService) {}

    @Get('rations/feed')
    getRationsFeed() {
        return this.routerService.getRationsFeed()
    }

    @Post('rations/generate')
    generateRation(@Body() dto: GenerateRationDto) {
        return this.routerService.generateRation()
    }

    @Post('user')
    getUserInfo(@Body() dto: GetUserInfoDto) {
        return this.routerService.getUserInfo(dto)
    }
}
