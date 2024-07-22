import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Order } from  "./orders.entity"
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @ApiProperty({
        description: 'The name must contain between 3 and 50 characters',
        example: 'Charles',
      })
    @Column({ length: 50,  })
    name: string;

    
    @ApiProperty({
        description: 'Should be with a e-mail format',
        example: 'charles@email.com',
      })
    @Column({ length: 50, unique: true })
    email: string;

    
    @ApiProperty({
        description: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one of the following special characters: !@#$%^&*; and have a minimum length of 8 and maximum of 15 characters',
        example: 'aaBB11!!',
      })
    @Column({ length: 200 })
    password: string;

    
    @ApiProperty({
        description: 'Sould be a number',
        example: '155678976',
      })
    @Column({ nullable: true })
    phone: string;

    
    @ApiProperty({
        description: 'The country must contain between 5 and 20 characters',
        example: 'Scotland',
      })
    @Column({ length: 50, nullable: true })
    country: string;

    
    @ApiProperty({
        description: 'The adress must contain between 3 and 80 characters',
        example: 'Bourbon St 321',
      })
    @Column({ type: 'text', nullable: true })
    address: string;

    
    @ApiProperty({
        description: 'The city must contain between 5 and 20 characters',
        example: 'Edinburgh',
      })
    @Column({ length: 50, nullable: true })
    city: string;

    @Column({
        default: false,
    })
    isAdmin: boolean;

    @OneToMany(() => Order, order => order.user)
    @JoinColumn({name: "order_id"})
    orders: Order[];
}