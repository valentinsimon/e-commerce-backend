import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "src/Entitys/user.entity";
import { UserRepository } from "src/Users/user.repository";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ){}

    getAuth() {
        return "Authentication"
    };

    async signIn(email: string, password: string) {
        if(!email || !password) return "Complete your data"

        const user = await this.userRepository.getUserByEmail(email)
        if(!user) throw new BadRequestException("Wrong data")
        
        const validatePassword = await bcrypt.compare(password, user.password)
        if(!validatePassword)throw new BadRequestException("Wrong data")

        const payload =  { id: user.id, email: user.email, isAdmin: user.isAdmin }   
        const token = this.jwtService.sign(payload)
        
            return {
                message: "Succesfull Log-In",
                token,
            };
    }

    async signUp(user:Partial<User>){
        const {email, password} = user

        const foundUser = await this.userRepository.getUserByEmail(email);
        if(foundUser){throw new BadRequestException("e-mail already exist")}

        const hashedPassword = await bcrypt.hash(password, 10);

        return await this.userRepository.addUser({
            ...user,
            password: hashedPassword
        })
    }


}