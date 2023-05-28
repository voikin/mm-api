import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(userDto: UserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findByID(id: string): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument>;
    update(id: string, updateDto: UserDto): Promise<UserDocument>;
    delete(id: string): Promise<UserDocument>;
    getUser(query: object): Promise<User>;
    existUser(userDto: UserDto): Promise<Boolean>;
    activate(activationLink: string): Promise<void>;
    addPreference(id: string, preference: string): Promise<UserDocument>;
    removePreference(id: string, preference: string): Promise<UserDocument>;
}
