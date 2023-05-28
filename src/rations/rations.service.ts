import { Injectable } from '@nestjs/common'
import { Product, Ration } from './models/Ration'
import { UsersService } from 'src/users/users.service'
import { User } from 'src/users/schemas/user.schema'

@Injectable()
export class RationsService {
    constructor(private readonly usersService: UsersService) {}

    async getRationsFeed(): Promise<Ration[]> {
        return fetch('http://generator:8000/list').then((res) => res.json())
    }

    async getRationsByIds(ids: string[] | Ration[]): Promise<Ration[]> {
        return fetch('http://generator:8000/getRationByIds', {
            method: 'POST',
            body: JSON.stringify(ids),
        }).then((res) => res.json())
    }

    async saveSelectedRation(ration: Ration): Promise<string | Ration> {
        return fetch('http://generator:8000/createRation', {
            method: 'POST',
            body: JSON.stringify(ration),
        }).then((res) => res.json())
    }

    async generateRation(id: string): Promise<Ration> {
        const { weight, height, age, sex } = await this.usersService.findByID(
            id,
        )
        let calories: number
        if (sex) {
            calories =
                (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) *
                1.375
        } else {
            calories =
                (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * 1.375
        }
        return fetch(`http://generator:8000/generateRation/${calories}`).then(
            (res) => res.json(),
        )
    }

    async getProducts(): Promise<Product[]> {
        return fetch('http://generator:8000/products').then((res) => res.json())
    }

    async getFullUserInfo(id: string): Promise<User> {
        const userFromDB = await this.usersService.findByID(id)
        const triedRations = await this.getRationsByIds(userFromDB.triedRations)
        for (let i = 0; i < triedRations.length; i++) {
            userFromDB.triedRations[i] = Object.assign(
                userFromDB.triedRations[i],
                triedRations[i],
            )
        }
        return userFromDB
    }

    async confirmRation(id: string, ration: Ration): Promise<User> {
        const rationId = await this.saveSelectedRation(ration)
        const user = await this.usersService.findByID(id)
        user.triedRations.push({
            rationId: rationId,
            date: Date.now(),
        })
        return user.save()
    }
}
