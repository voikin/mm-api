import { Test, TestingModule } from '@nestjs/testing'
import { RouterService } from './router.service'
import { GetUserInfoDto } from './dto/get-user-info.dto'

describe('Service', () => {
    let service: RouterService
    let fetchMock: jest.Mock

    beforeEach(async () => {
        fetchMock = jest.fn()
        global.fetch = fetchMock

        const module: TestingModule = await Test.createTestingModule({
            providers: [RouterService],
        }).compile()

        service = module.get<RouterService>(RouterService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getUserInfo', () => {
        it('should fetch user info and return it', async () => {
            // Arrange
            const mockUserInfo = {
                userId: '123',
                fields: [''],
            } as GetUserInfoDto
            fetchMock.mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockUserInfo),
            })
            const dto = {
                userId: '123',
                fields: [''],
            } as GetUserInfoDto

            // Act
            const result = await service.getUserInfo(dto)

            // Assert
            expect(fetchMock).toHaveBeenCalledWith('http://users:3000/users', {
                body: JSON.stringify(dto),
                method: 'POST',
            })
            expect(result).toEqual(mockUserInfo)
        })
    })

    describe('getRationsFeed', () => {
        it('should fetch rations feed and return it', async () => {
            // Arrange
            const mockFeed = [
                { id: 1, title: 'Feed 1' },
                { id: 2, title: 'Feed 2' },
            ]
            fetchMock.mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockFeed),
            })

            // Act
            const result = await service.getRationsFeed()

            // Assert
            expect(fetchMock).toHaveBeenCalledWith('http://generator:8000/list')
            expect(result).toEqual(mockFeed)
        })
    })

    describe('generateRation', () => {
        it('should generate a ration and return it', async () => {
            // Arrange
            const mockRation = { id: 1, name: 'Ration 1' }
            fetchMock.mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockRation),
            })

            // Act
            const result = await service.generateRation()

            // Assert
            expect(fetchMock).toHaveBeenCalledWith(
                'http://generator:8000/ration',
            )
            expect(result).toEqual(mockRation)
        })
    })
})
