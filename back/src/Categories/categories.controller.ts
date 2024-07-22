import { Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./categories.service";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("categories")
@Controller("categories")
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}


    @Post("seeder")
    addCategories (){
        return this.categoryService.addCategories();
    }

    @Get()
    getCategories(){
        return this.categoryService.getCategories();
    }

}
