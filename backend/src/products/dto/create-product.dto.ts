import { ApiProperty } from "@nestjs/swagger";
import { 
    IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, 
    IsString, MinLength 
} from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags: string[];

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];
}
