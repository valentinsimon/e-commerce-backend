import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrdersModule } from './Orders/orders.module';
import { CategoryModule } from './Categories/categories.module';
import { JwtModule } from '@nestjs/jwt';
import { typeOrmConfig } from './config/typeorm';
import { FileUploadModule } from './fileUpload/fileUpload.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    FileUploadModule, UsersModule, ProductsModule, AuthModule, OrdersModule, CategoryModule, 
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: "60m"}
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
