import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';

@ApiTags('Categories')
@ApiBearerAuth()
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  @ApiOperation({ summary: 'ایجاد دسته‌بندی جدید' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'دریافت همه دسته‌بندی‌ ها' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'دریافت یک دسته‌بندی' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'دریافت دسته‌بندی با اسلاگ' })
  findBySlug(@Param('slug') slug: string) {
    return this.categoriesService.findBySlug(slug);
  }

  @Put(':id')
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  @ApiOperation({ summary: 'بروزرسانی دسته‌ بندی' })
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateCategoryDto>,
  ) {
    return this.categoriesService.update(id, updateData);
  }

  @Delete(':id')
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  @ApiOperation({ summary: 'حذف دسته‌ بندی' })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
