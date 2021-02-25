import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductsServices {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Products>,
  ) {}
  async addProduct(req) {
    let newProduct = new this.productModel(req);
    let product = await this.productModel.create(newProduct);
    return { product };
  }
  async updateProduct(req) {
    let { id, productName, imagelink, caption } = req.body;
    let updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      {
        $set: {
          productName,
          imagelink,
          caption,
        },
      },
      { new: true },
    );
    if (updatedProduct) {
      return { updatedProduct };
    } else {
      return { message: 'No Product Found' };
    }
  }
  async deleteProduct(req) {
    let { id } = req.body;
    let product = await this.productModel.findByIdAndDelete(id);
    if (product) {
      return { message: 'Product Deleted' };
    } else {
      return { message: 'No Product Found' };
    }
  }
  async getProduct(req) {
    let { id } = req.body;
    let product = await this.productModel.findById(id);
    if (product) {
      return { product };
    } else {
      return { message: 'No Product Found' };
    }
  }
}
