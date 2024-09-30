import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "../../products/entities/product.entity";
// import { Pagos } from "./pagos.entity";
// import { Envios } from "./envios.entity";

@Entity({name: 'orders_details'})
export class OrderDetail {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'float',
        default: 0
    })
    total: number;

    @Column({
        type: 'date',
        default: new Date()
    })
    createdAt: Date;

    @Column({
        type: 'int',
        default: 0
    })
    quantity: number;

    @Column({
        type: 'float',
        default: 0
    })
    price: number;

    @ManyToOne(
        () => Product,
        (product) => product.id,
        { eager: true }
    )
    product: Product;

    @ManyToOne(
        () => Order,
        (order) => order.details,
        { onDelete: 'CASCADE'}
    )
    order: Order;
}