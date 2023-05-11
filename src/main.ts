import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 8080

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(cookieParser())
    app.enableCors()

    const config = new DocumentBuilder()
        .setTitle('Inner API for Mealmapper')
        .setDescription('REST API documentation')
        .setVersion('0.0.1')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT)
}
bootstrap()
