import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../auth/entities/user.entity";
import { OrderDetail } from "./order-detail.entity";
// import { Pagos } from "./pagos.entity";
// import { Envios } from "./envios.entity";

@Entity({ name: 'orders' })
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'float',
        default: 0
    })
    total: number;

    @Column({
        type: 'text',
    })
    state: string;

    @Column({
        type: 'date',
        default: new Date()
    })
    createdAt: Date;

    @OneToMany(
        () => OrderDetail,
        orderDetail => orderDetail.order,
        { cascade: true, eager: true }
    )
    details: OrderDetail[];

    @ManyToOne(
        () => User,
        (user) => user.products,
        { eager: true }
    )
    user: User;
}