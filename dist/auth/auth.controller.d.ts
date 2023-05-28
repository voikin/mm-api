import { UserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    signup(userDto: UserDto): Promise<void>;
    login(userDto: UserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<void>;
    activate(link: string, res: Response): Promise<void>;
    refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
