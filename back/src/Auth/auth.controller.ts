import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { CreateUserDto, LoginUserDto } from "src/Users/user.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor (private readonly authservice: AuthService){}

    @Get()
    getAuth(){
        return this.authservice.getAuth()
    }

    @Post("signup")
    postUsers(@Body() user: CreateUserDto){
        return this.authservice.signUp(user)
    };

    @Post("signin")
    signIn(@Body() credentials:LoginUserDto){
        const { email, password } = credentials
        return this.authservice.signIn(email, password)
    }
}