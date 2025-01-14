import { Module } from '@nestjs/common';
import * as pg from 'pg';
import { Client } from 'pg';
import { ConfigModule } from '@app/common/config';
import { ConfigService } from '@nestjs/config';
import { DatabaseProvider } from '@app/common/database/database.provider';

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: DatabaseProvider,
            useFactory: async (configService: ConfigService) => {
                try {
                    const db = new Client({
                        user: configService.get<string>('POSTGRES_USER'),
                        host: configService.get<string>('POSTGRES_HOST'),
                        database: configService.get<string>(
                            'POSTGRES_DB_POCKET_CART',
                        ),
                        password: configService.get<string>(
                            'POSTGRES_USER_PASSWORD',
                        ),
                        port: configService.get<number>('POSTGRES_PORT'),
                    });

                    await db.connect();

                    return new DatabaseProvider(db);
                } catch (error) {
                    throw error;
                }
            },
            inject: [ConfigService],
        },
    ],
    exports: [DatabaseProvider],
})
export class DatabaseModule {}
