import { UsersService } from './users.service'
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Req,
    Request,
    UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User, UserDocument } from './schemas/user.schema'
import { UserDto } from './dto/create-user.dto'
import { AccessTokenGuard } from 'src/auth/accessToken.guard'

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: 'Creating a new user' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    async create(@Body() userDto: UserDto): Promise<UserDocument> {
        return this.usersService.create(userDto)
    }

    @ApiOperation({ summary: 'Getting all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    async findAll(): Promise<UserDocument[]> {
        return this.usersService.findAll()
    }

    @ApiOperation({ summary: 'Getting user by id' })
    @ApiResponse({ status: 200, type: User })
    @Get(':id')
    async findByID(@Param('id') id: string): Promise<UserDocument> {
        return this.usersService.findByID(id)
    }

    @ApiOperation({ summary: 'Updating users by id' })
    @ApiResponse({ status: 201, type: User })
    @Patch()
    @UseGuards(AccessTokenGuard)
    async update(
        @Request() req,
        @Body() updateDto: UserDto,
    ): Promise<UserDocument> {
        const userId = req.user.id
        console.log(req)
        return this.usersService.update(userId, updateDto)
    }

    @ApiOperation({ summary: 'Deleting user by id' })
    @ApiResponse({ status: 200, type: User })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<UserDocument> {
        return this.usersService.delete(id)
    }

    @ApiOperation({ summary: 'Добавление предпочтения' })
    @ApiResponse({ status: 201, type: User })
    @Put('preference/:pref')
    @UseGuards(AccessTokenGuard)
    async addPreference(@Request() req, @Param('pref') preference: string) {
        const { id } = req.user
        return this.usersService.addPreference(id, preference)
    }

    @ApiOperation({ summary: 'Удаление предпочтения' })
    @ApiResponse({ status: 200, type: User })
    @Delete('preference/:pref')
    @UseGuards(AccessTokenGuard)
    async removePreference(@Request() req, @Param('pref') preference: string) {
        const { id } = req.user
        return this.usersService.removePreference(id, preference)
    }
}
