import { Product, Ration } from './models/Ration';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/schemas/user.schema';
export declare class RationsService {
    private readonly usersService;
    constructor(usersService: UsersService);
    getRationsFeed(): Promise<Ration[]>;
    getRationsByIds(ids: string[] | Ration[]): Promise<Ration[]>;
    saveSelectedRation(ration: Ration): Promise<string | Ration>;
    generateRation(id: string): Promise<Ration>;
    getProducts(): Promise<Product[]>;
    getFullUserInfo(id: string): Promise<User>;
    confirmRation(id: string, ration: Ration): Promise<User>;
}
