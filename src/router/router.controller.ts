import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { GenerateRationDto } from './dto/generate-ration.dto'
import { GetUserInfoDto } from './dto/get-user-info.dto'
import { RouterService } from './router.service'
import { AccessTokenGuard } from 'src/auth/accessToken.guard'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Ration } from './dto/Ration'
import { UserInfoUnit } from './dto/UserInfo'

@ApiTags('Маршрутизатор запросов между сервисами', 'Только авторизованные')
@Controller('api')
export class RouterController {
    constructor(private routerService: RouterService) {}

    @ApiOperation({ summary: 'Генерация ленты рационов' })
    @ApiResponse({ status: 200, type: [Ration] })
    @UseGuards(AccessTokenGuard)
    @Get('rations/feed')
    getRationsFeed() {
        return this.routerService.getRationsFeed()
    }

    @ApiOperation({ summary: 'Генерация ленты рационов' })
    @ApiResponse({ status: 201, type: Ration })
    @UseGuards(AccessTokenGuard)
    @Post('rations/generate')
    generateRation(@Body() dto: GenerateRationDto) {
        return this.routerService.generateRation()
    }

    @ApiOperation({ summary: 'Запрос данных пользователя' })
    @ApiResponse({ status: 200, type: [UserInfoUnit] })
    @UseGuards(AccessTokenGuard)
    @Post('user')
    getUserInfo(@Body() dto: GetUserInfoDto) {
        return this.routerService.getUserInfo(dto)
    }
}
