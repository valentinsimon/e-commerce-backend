import { Module } from "@nestjs/common";
import { UserService } from "./users.services";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entitys/user.entity";
import { AuthService } from "src/Auth/auth.services";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers:[UserService, UserRepository, AuthService]
})
export class UsersModule {}