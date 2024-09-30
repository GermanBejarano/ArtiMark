import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Auth()
  create(
    @Body() createOrderDto: CreateOrderDto,
    @GetUser() user: User
  ) {
    return this.ordersService.create(createOrderDto, user);
  }

  @Get()
  @Auth()
  findAll() {
    return this.ordersService.findAll();
  }

}
