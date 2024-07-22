import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./order.dto";
import { AuthGuard } from "src/Auth/AuthGuard/auth.guard";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("orders")
@Controller("orders")
export class OrdersControllers{
    constructor(private readonly ordersService: OrderService){}

    @Post()
    @UseGuards(AuthGuard)
    addOrder(@Body() order: CreateOrderDto){
        const {userId, product} = order;
        return this.ordersService.addOrder(userId, product);
    }


    @Get(":id")
    @UseGuards(AuthGuard)
    getOrder(@Param("id", ParseUUIDPipe) id: string){
        return this.ordersService.getOrder(id);
    }
}