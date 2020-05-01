import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { get } from 'http';
import { ApiTags, ApiOperation, ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { type } from 'os';

import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ReturnModelType } from "@typegoose/typegoose";

// 自带增删改查五个接口
import { Crud } from 'nestjs-mongoose-crud'

// 发帖子的数据格式 Dto: data transform object
class CreatePostDto {
  @ApiProperty({ required: true, description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiProperty({ required: true, description: '帖子内容', example: '帖子内容1' })
  content: string
}

@Crud({
  model: PostSchema,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '帖子列表' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '发帖子' })
      ],
      dto: CreatePostDto
    },
    update: {
      decorators: [
        ApiOperation({ summary: '修改帖子' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '帖子详情' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除帖子' })
      ]
    }
  }
})
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly model: ReturnModelType<typeof PostSchema>
  ) { }

  // @Get()
  // @ApiOperation({ summary: '显示博客列表' })
  // async index() {
  //   return await this.postModel.find()
  // }

  // @Post()
  // @ApiOperation({ summary: '发帖子' })
  // async create(@Body() createPostDto: CreatePostDto) {
  //   await this.postModel.create(createPostDto)
  //   return {
  //     success: true
  //   }
  // }

  // @Get(':id')
  // @ApiOperation({ summary: '帖子详情' })
  // async detail(@Param('id') id: string) {
  //   return await this.postModel.findById(id)
  // }

  // @Put(':id')
  // @ApiOperation({ summary: '编辑帖子' })
  // async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
  //   await this.postModel.findByIdAndUpdate(id, updatePostDto)
  //   return {
  //     success: true
  //   }
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: '删除帖子' })
  // async remove(@Param('id') id: string) {
  //   await this.postModel.findByIdAndDelete(id)
  //   return {
  //     success: true
  //   }
  // }
}
