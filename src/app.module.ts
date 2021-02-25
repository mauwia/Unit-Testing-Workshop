import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose"
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://unitTesting:nestTesting@cluster0.grp3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true
      }
    ),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
