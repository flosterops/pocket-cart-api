import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });
    app.useLogger(app.get(Logger));
    const configService = app.get(ConfigService);
    const PORT = configService.get<number>('APP_PORT');
    await app.listen(PORT);
}

bootstrap();
