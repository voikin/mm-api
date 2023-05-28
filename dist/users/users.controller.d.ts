import { UsersService } from './users.service';
import { UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: UserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findByID(id: string): Promise<UserDocument>;
    update(req: any, updateDto: UserDto): Promise<UserDocument>;
    delete(id: string): Promise<UserDocument>;
    addPreference(req: any, preference: string): Promise<UserDocument>;
    removePreference(req: any, preference: string): Promise<UserDocument>;
}
