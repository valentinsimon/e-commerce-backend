import { Module } from "@nestjs/common";
import { OrdersControllers } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "./order.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDetails } from "src/Entitys/orderDetails.entity";
import { User } from "src/Entitys/user.entity";
import { Product } from "src/Entitys/products.entity";
import { Order } from "src/Entitys/orders.entity";

@Module({
    imports:[TypeOrmModule.forFeature([OrderDetails, User, Product, Order])],
    controllers:[OrdersControllers],
    providers:[OrderService,OrderRepository],
})
export class OrdersModule{}