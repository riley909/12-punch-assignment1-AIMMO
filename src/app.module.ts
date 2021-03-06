import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { BucketModule } from './bucket/bucket.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
    PostsModule,
    CategoriesModule,
    CommentsModule,
    BucketModule,
  ],
})
export class AppModule {}
