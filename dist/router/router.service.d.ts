import { GetUserInfoDto } from './dto/get-user-info.dto';
export declare class RouterService {
    getUserInfo(dto: GetUserInfoDto): Promise<any>;
    getRationsFeed(): Promise<any>;
    generateRation(): Promise<any>;
}
