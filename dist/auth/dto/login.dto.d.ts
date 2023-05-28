import { AuthDto } from './auth.dto';
export declare class LoginDto {
    accessToken: string;
    authDto: AuthDto;
    constructor(accessToken: string, authDto: AuthDto);
}
