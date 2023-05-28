import { GenerateRationDto } from './dto/generate-ration.dto';
import { GetUserInfoDto } from './dto/get-user-info.dto';
import { RouterService } from './router.service';
export declare class RouterController {
    private routerService;
    constructor(routerService: RouterService);
    getRationsFeed(): Promise<any>;
    generateRation(dto: GenerateRationDto): Promise<any>;
    getUserInfo(dto: GetUserInfoDto): Promise<any>;
}
