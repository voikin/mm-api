import { Ration } from './models/Ration';
import { RationsService } from './rations.service';
export declare class RationsController {
    private rationsService;
    constructor(rationsService: RationsService);
    getFeed(): Promise<Ration[]>;
    generateRation(req: any): Promise<Ration>;
    getFullInfo(req: any): Promise<import("../users/schemas/user.schema").User>;
    confirmRation(req: any, ration: Ration): Promise<import("../users/schemas/user.schema").User>;
}
