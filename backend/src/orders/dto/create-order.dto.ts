import { Type } from "class-transformer";
import { IsArray, IsInt, IsNumber, IsObject, IsPositive, IsString } from "class-validator";
import { OrderDetail } from "../entities/order-detail.entity";

export class CreateOrderDto {
    @IsNumber()
    @IsPositive()
    total: number;

    @IsString()
    state: string;

    @IsArray()
    details: OrderDetail[];
}