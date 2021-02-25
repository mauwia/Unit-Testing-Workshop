import * as mongoose  from 'mongoose'

export const ProductsSchema=new mongoose.Schema({ 
    productName:{type:String}, 
    caption:{type:String},
    imagelink:{type:String},
})

export interface Products extends mongoose.Document{
    productName:string;
    caption:string;
    imagelink:string;
}