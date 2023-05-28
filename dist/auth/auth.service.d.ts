import { TokenService } from './token/token.service';
import { UserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { MailService } from 'src/auth/mail/mail.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly mailService;
    private readonly tokenService;
    constructor(usersService: UsersService, mailService: MailService, tokenService: TokenService);
    signup(userDto: UserDto): Promise<any>;
    login(userDto: UserDto): Promise<{
        authDto: AuthDto;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<any>;
    refresh(refreshToken: string): Promise<{
        authDto: AuthDto;
        accessToken: string;
        refreshToken: string;
    }>;
}
