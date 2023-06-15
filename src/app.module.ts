import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost/nest') //Tambien podria ser process.env.DB_URI y declarar el archivo .env
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
