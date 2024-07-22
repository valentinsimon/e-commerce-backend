import { Module } from "@nestjs/common";
import { CategoryController } from "./categories.controller";
import { CategoryService } from "./categories.service";
import { CategoryRepository } from "./categories.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/Entitys/categories.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryRepository]
})
export class CategoryModule {}