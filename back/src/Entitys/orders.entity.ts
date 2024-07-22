import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from "./user.entity" 
import { OrderDetails } from "./orderDetails.entity" 
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ApiProperty({
        description: 'Should be a Date',
      })
    @Column()
    date: Date;
    
    @OneToOne(() => OrderDetails, orderDetails => orderDetails.order)
    orderDetails: OrderDetails;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({name: "user_id"})
    user: User;
}