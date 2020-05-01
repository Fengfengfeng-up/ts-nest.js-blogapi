import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [
    PostsModule,
    TypegooseModule.forRoot("mongodb://localhost:27017/nest-blog-api", {
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService], // 依赖注入
})
export class AppModule { }
