import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                APP_PORT: Joi.string().required(),
                POSTGRES_PORT: Joi.string().required(),
                POSTGRES_ADMIN: Joi.string().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_USER_PASSWORD: Joi.string().required(),
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_ADMIN_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
            }),
        }),
    ],
})
export class ConfigModule {}
