import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/auth/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { DataSource, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity'; // Asegúrate de importar la entidad Product

@Injectable()
export class OrdersService {
  private readonly logger = new Logger('OrdersService');

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    private readonly dataSource: DataSource
  ) { }

  async create(createOrderDto: CreateOrderDto, user: User) {
    try {
      const { details = [], ...orderData } = createOrderDto;

      const order = this.orderRepository.create({
        ...orderData,
        user
      });

      // Guardar el pedido para obtener un ID generado
      await this.orderRepository.save(order);

      // Crear y guardar detalles del pedido
      const orderDetails = await Promise.all(
        details.map(async (detail) => {
          const { product, quantity, price, total } = detail;
          const findProduct = await this.dataSource
            .getRepository(Product)
            .findOneBy({ id: product.id });

          if (!findProduct)
            throw new BadRequestException(`Product with ID ${product.id} not found`);

          if (findProduct.stock < quantity)
            throw new BadRequestException(`Not enough stock for product ID ${findProduct.id}`);

          findProduct.stock -= quantity;
          await this.dataSource.getRepository(Product).save(findProduct);


          return this.orderDetailRepository.create({
            product: findProduct,
            quantity,
            price,
            total,
            order
          });
        })
      );

      // Guardar los detalles del pedido
      await this.orderDetailRepository.save(orderDetails);

      return order;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['details', 'details.product'],
    });
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
