import { UserDocument } from 'src/users/schemas/user.schema';
export declare class AuthDto {
    email: any;
    id: any;
    isActivated: any;
    constructor(user: UserDocument);
}
