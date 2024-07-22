import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./users.services";
import { AuthGuard } from "src/Auth/AuthGuard/auth.guard";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { AuthService } from "src/Auth/auth.services";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "src/Auth/AuthGuard/roles.guard";
import { Roles } from "src/Decorators/roles.decorator";
import { Role } from "./roles.enum";
import { User } from "src/Entitys/user.entity";


@ApiTags("users")
@Controller("users")
export class UserController {
    constructor(private readonly userservice: UserService,
        private readonly authService: AuthService,
    ) {}


    @ApiBearerAuth()
    @Get()
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    getUsers(@Query("page") page:string, @Query("limit") limit:string) {
        if (page && limit) return this.userservice.getUsers(Number(page), Number(limit));
        return this.userservice.getUsers(1, 5);
    }

    @ApiBearerAuth()
    @Get(":id")
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    getUserById(@Param("id", ParseUUIDPipe) id:string,){
        return this.userservice.getUserById(id)
    };



    @ApiBearerAuth()
    @Put(":id")
    @UseGuards(AuthGuard, RolesGuard)
    putUserById(@Param("id", ParseUUIDPipe) id:string, @Body() user:UpdateUserDto){
        return this.userservice.updateUser(id, user)
    };


    @ApiBearerAuth()
    @Delete(":id")
    @UseGuards(AuthGuard, RolesGuard)
    deleteUserById(@Param("id", ParseUUIDPipe) id:string) {
        return this.userservice.deleteUser(id)
    };


}