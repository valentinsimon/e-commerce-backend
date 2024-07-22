import { Module } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { AuthController } from "./auth.controller";
import { UserRepository } from "src/Users/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entitys/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[AuthController],
    providers:[AuthService, UserRepository]
})
export class AuthModule {}