import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Category } from "./categories.entity" 
import { OrderDetails } from "./orderDetails.entity"; 
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @ApiProperty({
        description: 'The name must contain less than 50 characters',
        example: 'iPhone 15',
      })
    @Column({ length: 50 })
    name: string;

    
    @ApiProperty({
        description: 'Description should be a "text"',
      })
    @Column('text')
    description: string;

    
    @ApiProperty({
        description: 'Description should be a "number"',
      })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    
    @ApiProperty({
        description: 'Price should be a "number" more than 0',
      })
    @Column('int')
    stock: number;

    
    @ApiProperty({
        description: 'Optional, should be a url string',
      })
    @Column({ nullable: true })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.product)
    @JoinColumn({name: "category_id"})
    category: Category;

}