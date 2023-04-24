import { User, UserDocument } from "src/users/schemas/user.schema"

export class AuthDto {
    email
    id
    isActivated

    constructor(user: UserDocument) {
        this.email = user.email
        this.id = user._id
        this.isActivated = user.isActivated
    }
}