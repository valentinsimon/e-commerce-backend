import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entitys/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User> 
    ){}


    async getUser(page: number, limit: number){
        const users = await this.userRepository.find()
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const userIndex = users.slice(startIndex, endIndex);

        return users.map(({password, ...userNoPassword}) => userNoPassword)
    }

    async getById(id:string){
        const user = await this.userRepository.findOne({
            where: {id},
            relations: {
                orders: true,
            },
        });
        if (!user) {return "No user found with the provided ID"}
        const {password, ...userNoPassword} = user;
        return userNoPassword;
    }

    async addUser(user: Partial<User>){
        const newUser = await this.userRepository.save(user)
        const dbUser = await this.userRepository.findOneBy({id: newUser.id})
        const {password, ...userNoPassword} = dbUser;
        return userNoPassword;
    }


    async updateUser(id: string, user:User){
        await this.userRepository.update(id,user)
        const updatedUser = await this.userRepository.findOneBy({id})
        const {password, ...userNoPassword} = updatedUser;
        return userNoPassword;
    }


    async deleteUser(id:string){
        const user = await this.userRepository.findOneBy({id})
        this.userRepository.remove(user);
        const {password, ...userNoPassword} = user;
        return userNoPassword;
    }

    async getUserByEmail(email: string){
        return await this.userRepository.findOneBy({email});
    }


}