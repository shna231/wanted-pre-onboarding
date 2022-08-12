import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CompanyModule } from './company/company.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    CompanyModule,
    PostModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USERNAME),
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}