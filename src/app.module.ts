import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { DataSource } from 'typeorm';
import { LogService } from './shared/logger.service';
import { UserModule } from './modules/users/user.module';
import { JwtService } from '@nestjs/jwt';
import { ArticleModule } from './modules/articles/article.module';

const MODULES = [UserModule, ArticleModule];
const SERVICES = [LogService, JwtService];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsRun: true,
      }),
    }),
    ...MODULES,
  ],
  controllers: [AppController],
  providers: [...SERVICES],
})
export class AppModule {
  constructor(
    private readonly logService: LogService,
    private readonly dataSource: DataSource,
  ) {
    this.checkDatabaseConnection(
      this.dataSource?.options?.type,
      this.dataSource?.isInitialized,
    );
  }

  private checkDatabaseConnection(dbType: string, isConnected: boolean) {
    isConnected &&
      this.logService.success(
        `[DATABASE - ${dbType.toUpperCase()}] Successful database connection.`,
      );
  }
}
