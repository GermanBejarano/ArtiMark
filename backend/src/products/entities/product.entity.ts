import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "../../auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'products'})
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    title: string;

    @Column({
        type: 'float',
        default: 0
    })
    price: number;


    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column({
        type: 'int',
        default: 0,
    })
    stock: number;

    @Column({
        type: 'text',
        array: true,
        default: []
    })
    tags: string[];

    @Column('bool', {
        default: true
    })
    active: boolean;

    @OneToMany(
        () => ProductImage,
        (productImage) => productImage.product,
        { cascade: true, eager: true }
    )
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        (user) => user.products,
        { eager: true }
    )
    user: User;

}
