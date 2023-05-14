import { Injectable } from '@nestjs/common'
import { GetUserInfoDto } from './dto/get-user-info.dto'

@Injectable()
export class RouterService {
    async getUserInfo(dto: GetUserInfoDto) {
        const res = await fetch('http://127.0.0.1:3000/users', {
            body: JSON.stringify(dto),
            method: 'POST',
        })
        const userInfo = await res.json()
        return userInfo
    }

    async getRationsFeed() {
        const res = await fetch('http://127.0.0.1:8000/list')
        const feed = await res.json()
        return feed
    }

    async generateRation() {
        const res = await fetch('http://127.0.0.1:8000/ration')
        const ration = await res.json()
        return ration
    }
}
