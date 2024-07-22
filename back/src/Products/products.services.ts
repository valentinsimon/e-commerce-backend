import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { Product } from "src/Entitys/products.entity";

@Injectable()
export class ProductService {
    constructor(private readonly productsrepository: ProductRepository){}
    
    getProducts(page: number, limit: number) {
        return this.productsrepository.getProducts(page, limit)
    }

    getProductById(id:string) {
        return this.productsrepository.getProductById(id)
    }

    addProducts() {
        return this.productsrepository.addProducts()
    }

    updateProduct(id:string, product: Product) {
        return this.productsrepository.updateProduct(id, product)
    }
}