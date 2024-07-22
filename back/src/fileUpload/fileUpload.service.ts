import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {FileUploadRepository } from "./fileUpload.repository";
import { Product } from "src/Entitys/products.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class FileUploadService{
    constructor( 
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
        private readonly fileUploadRepositoy: FileUploadRepository){}

    async uploadImage (file: Express.Multer.File, productId: string) {
        const product = await this.productsRepository.findOneBy({id: productId})
        if (!product) { throw new NotFoundException("Product not found")}
        
        const response = await this.fileUploadRepositoy.uploadImage(file)

        await this.productsRepository.update(productId, {
            imgUrl: response.secure_url
        })

        const updateProduct = await this.productsRepository.findOneBy({id: productId})

        return updateProduct

    }
}