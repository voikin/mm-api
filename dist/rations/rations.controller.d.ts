import { Product, Ration } from './models/Ration';
import { RationsService } from './rations.service';
import { User } from 'src/users/schemas/user.schema';
export declare class RationsController {
    private rationsService;
    constructor(rationsService: RationsService);
    getFeed(): Promise<Ration[]>;
    generateRation(req: any): Promise<Ration>;
    getFullInfo(req: any): Promise<User>;
    confirmRation(req: any, ration: Ration): Promise<User>;
    getProducts(): Promise<Product[]>;
}
