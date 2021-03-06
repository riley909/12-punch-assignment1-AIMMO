import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/user.entity';
import { Post } from '../../posts/entities/post.entity';
import { Bucket } from '../../bucket/bucket.entity';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  author: User;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'post' })
  post: Post;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Comment.name })
  parent: Comment;
  @Prop()
  depth: number;
  @Prop()
  content: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bucket' }] })
  bucket: Bucket[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
