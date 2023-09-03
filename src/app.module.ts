import { Module } from '@nestjs/common';
import { AuthModule } from './features/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environments } from './environments/environments';
import { UserModule } from './features/user/user.module';
import entities from './utils/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: environments.dbHost,
      port: environments.dbPort,
      username: environments.dbUserName,
      password: environments.dbPassword,
      database: environments.dbName,
      entities: entities,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
      synchronize: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
