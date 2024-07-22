import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { data } from "src/Archivo HW/archive.utils";
import { Category } from "src/Entitys/categories.entity";
import { Product } from "src/Entitys/products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository{
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>, 
    ) {}

    async getProducts(page: number, limit: number) {
        let products = await this.productsRepository.find({
            relations: {
                category: true
            },
        });
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const productsIndex = products.slice(startIndex, endIndex);
    
        return products
    }

    async getProductById(id:string) {
        const product = await this.productsRepository.findOneBy({id})
        if (!product) {return "No matches found"};
        return product;
    }


    async addProducts(): Promise<string> {
        try {
            const productsToAddOrUpdate = data; 

            for (const element of productsToAddOrUpdate) {
                const { name, description, price, stock, category: categoryName, imgUrl } = element;

                let category: Category;
                try {
                    category = await this.categoryRepository.findOneOrFail({ where: { name: categoryName } });
                } catch (error) {
                    category = this.categoryRepository.create({ name: categoryName });
                    await this.categoryRepository.save(category);
                }

                let product = await this.productsRepository.findOne({ where: { name } });

                if (!product) {
                    product = this.productsRepository.create({
                        name,
                        description,
                        price,
                        stock,
                        imgUrl,
                        category,
                    });
                } else {
                    product.description = description;
                    product.price = price;
                    product.stock = stock;
                    product.imgUrl = imgUrl;
                    product.category = category;
                }

                await this.productsRepository.save(product);
            }

            return "Products added or updated successfully";
        } catch (error) {
            throw new Error(`Error adding or updating products: ${error.message}`);
        }
    }

    async updateProduct(id: string, product: Product){
        await this.productsRepository.update(id,product);
        const updatedProduct = await this.productsRepository.findOneBy({id});
        return updatedProduct
    }


}