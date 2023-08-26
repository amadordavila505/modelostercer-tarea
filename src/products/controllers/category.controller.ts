import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';


@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriesService.findOne(id);
    }

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCategoryDto: CreateCategoryDto) {
        return this.categoriesService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.categoriesService.remove(id);
    }
}
