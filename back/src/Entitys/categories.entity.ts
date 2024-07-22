import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Product } from "./products.entity" 
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Category {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @ApiProperty({
        description: 'Name: less than 50 characters',
      })
    @Column({ length: 50 })
    name: string;

    @OneToMany(() => Product, product => product.category)
    @JoinColumn()
    product: Product[];
}