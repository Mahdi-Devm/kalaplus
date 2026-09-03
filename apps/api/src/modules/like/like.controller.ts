import { UserInfo } from '@common/decorators/user.decorator';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  create(
    @Body() createLikeDto: CreateLikeDto,
    @UserInfo('userId') userid: string,
  ) {
    return this.likeService.create(createLikeDto, userid);
  }

  @Get()
  findAll(@UserInfo('userId') id: string) {
    return this.likeService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @UserInfo('userId') userid: string) {
    return this.likeService.findOne(id, userid);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @UserInfo('userId') userid: string) {
    return this.likeService.remove(id, userid);
  }
}
