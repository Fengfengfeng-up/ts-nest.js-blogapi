import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class Post {
  @ApiProperty({ required: true, description: '帖子标题', example: '帖子标题1' })
  @prop()
  title: string
  @ApiProperty({ required: true, description: '帖子内容', example: '帖子内容1' })
  @prop()
  content: string
}
