import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/Entitys/categories.entity";
import { Repository } from "typeorm";
import { data } from "src/Archivo HW/archive.utils";


@Injectable()
export class CategoryRepository {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}


    async getCategories() {
        return await this.categoryRepository.find();
    }


    async addCategories() {
        data?.map(async(element) => {
            await this.categoryRepository
            .createQueryBuilder()
            .insert()
            .into(Category)
            .values({ name: element.category })
            .orIgnore()
            .execute();
        });
        return "Categories updated"
    }
}