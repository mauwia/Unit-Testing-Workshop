import {Controller,Post,Body, Get, Param,Req, Delete, Put} from '@nestjs/common'
import {  request, Request } from "express";
import {ProductsServices} from './product.service'
@Controller('product')
export class ProductsController {
    constructor(private readonly productServices:ProductsServices){}
    @Post()
    async addProduct(@Req() request:Request){
        let product=await this.productServices.addProduct(request.body)
        return product
    }
    @Put()
    async updateProduct(@Req() request:Request){
        let product=await this.productServices.updateProduct(request)
        return product
    }
    @Get()
    async getProduct(@Req() request:Request){
        let product=await this.productServices.getProduct(request)
        return product
    }
    @Delete()
    async deleteProduct(@Req() request:Request){
        let product=await this.productServices.deleteProduct(request)
        return product
    }
}
