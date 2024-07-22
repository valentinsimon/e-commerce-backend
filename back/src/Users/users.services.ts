import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "src/Entitys/user.entity";

@Injectable()
export class UserService {
    constructor(private readonly userrepository:UserRepository) {}

    getUsers(page: number, limit: number) {
        return this.userrepository.getUser(page, limit)
    }

    getUserById(id:string) {
        return this.userrepository.getById(id)
    }

    addUser(user:any) {
        return this.userrepository.addUser(user)
    }

    updateUser(id:string, user:any) {
        return this.userrepository.updateUser(id, user)
    }

    deleteUser(id:string) {
        return this.userrepository.deleteUser(id)
    }

}