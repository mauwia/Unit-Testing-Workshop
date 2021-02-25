import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {ProductsSchema} from './product.model'
import {ProductsController} from './product.controller'
import {ProductsServices} from './product.service'
@Module({
    imports:[MongooseModule.forFeature([{name:"Product",schema:ProductsSchema}])],
    controllers:[ProductsController],
    providers:[ProductsServices]
})
export class ProductModule {}
