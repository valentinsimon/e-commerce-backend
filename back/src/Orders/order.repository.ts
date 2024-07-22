import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetails } from "src/Entitys/orderDetails.entity";
import { Order } from "src/Entitys/orders.entity";
import { Product } from "src/Entitys/products.entity";
import { User } from "src/Entitys/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
        @InjectRepository(OrderDetails) private orderdetailsRepository: Repository<OrderDetails>,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Product) private productRepository: Repository<Product>,
    ) {}

    async addOrder(userId:string, product: any){
        let total = 0

        const user = await this.userRepository.findOneBy({ id:userId })
        if(!user){
            return "No user with that ID found";
        }

        const order = new Order();
        order.date = new Date();
        order.user = user;

        const newOrder = await this.orderRepository.save(order);

        const productArray = await Promise.all(
            product.map(async(element) => {
                const products = await this.productRepository.findOneBy({id: element.id});
                
                if(!products){
                    return "No user with that ID found"
                }

                total += Number(products.price)

                await this.productRepository.update(
                    {id: element.id},
                    {stock: products.stock -1},
                );
                return products;
            }),
        );

        const orderDetail = new OrderDetails();
        
        orderDetail.order = newOrder;
        orderDetail.price = Number(Number(total).toFixed(2));
        orderDetail.products = productArray;
        await this.orderdetailsRepository.save(orderDetail);

        return await this.orderRepository.find({
            where: {id: newOrder.id},
            relations: {
                orderDetails: true,
            },
        });

    }




    async getOrder(id: string) {
        const foundOrder = await this.orderRepository.findOne(
            {
                where: {id},
                relations: {
                    orderDetails:{
                        products:true,
                    },
                },
            });
            if (!foundOrder){return "There is no order with the given ID"};
            return foundOrder;
    };
}