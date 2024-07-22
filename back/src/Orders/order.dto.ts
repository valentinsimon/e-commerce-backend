import { ApiProperty } from "@nestjs/swagger"
import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from "class-validator"
import { Product } from "src/Entitys/products.entity"

export class CreateOrderDto {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @IsNotEmpty()
    @IsUUID()
    userId: string


    @ApiProperty({
        description: 'Should be a product/products format',
        example: 'BOOK 1',
      })
    @IsArray()
    @ArrayMinSize(1)
    product: Partial<Product[]>
}