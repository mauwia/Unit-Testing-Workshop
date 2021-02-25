import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './product.controller';
import { ProductsServices } from './product.service';
import { Request } from "express";
describe('ProductController', () => {
  let controller: ProductsController;
  // let product = {
  //   _id: "12345678",
  //   productName: "SHIRT",
  //   imagelink: 'imagelink123',
  //   caption: "Caption123",
  // };
  // class productModel {
  //   constructor(body) {
  //     return body
  //   }
  //   static create = jest.fn().mockImplementation(req=>{
  //     return req
  //   });
   
  // }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers:[
        ProductsServices,
        // {
        //   provide:getModelToken("Product"),
        //   useValue:productModel
        // }
      ]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });
  // test("addProduct",async ()=>{
  //   let req={
  //     body:{
  //       productName: "SHIR",
  //       imagelink: 'imagelink123',
  //       caption: "Caption123",
        
  //     }, 
  //     test:"www"
  //   } as unknown as Request
  //   let response=await controller.addProduct(req)
  //   expect(response.product).toStrictEqual(req.body)
  // })

});
