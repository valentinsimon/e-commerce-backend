import { Module } from "@nestjs/common";
import { ProductService } from "./products.services";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/Entitys/products.entity";
import { Category } from "src/Entitys/categories.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Product, Category])],
    controllers:[ProductController],
    providers:[ProductService, ProductRepository]
})
export class ProductsModule {}