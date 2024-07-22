import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { Order } from  "./orders.entity";
import { Product } from  "./products.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class OrderDetails {
    
    @ApiProperty({
        description: 'Should be a UUID user from DB',
      })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @OneToOne(() => Order, order => order.orderDetails)
    @JoinColumn({name: "order_id"})
    order: Order;

    @ManyToMany(() => Product)
    @JoinTable({
        name: "orderDetail_products",
        joinColumn: {
            name: "product_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "orderDetail_id",
            referencedColumnName: "id"
        }
    })
    products: Product[];
}