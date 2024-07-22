import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductService } from "./products.services";
import { AuthGuard } from "src/Auth/AuthGuard/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "src/Auth/AuthGuard/roles.guard";


@ApiTags("products")
@Controller("products")
export class ProductController {
    constructor (private readonly productservice: ProductService) {}

    @Get()
    getProducts(@Query("page") page: string, @Query("limit") limit: string) {
        return this.productservice.getProducts(Number(page), Number(limit))
    }
    
    @Get(":id")
    getProductById(@Param("id", ParseUUIDPipe) id:string){}
    
    @Post("seeder")
    addProducts(){
        return this.productservice.addProducts()
    }
    
    @Post()
    postProducts(@Body() product:any){};

    @ApiBearerAuth()
    @Put(":id")
    @UseGuards(AuthGuard, RolesGuard)
    updateProduct(@Param("id", ParseUUIDPipe) id:string, @Body() product:any){
        return this.productservice.updateProduct(id, product)
    };

    @Delete(":id")
    deleteProductById(@Param("id", ParseUUIDPipe) id:string) {};
}