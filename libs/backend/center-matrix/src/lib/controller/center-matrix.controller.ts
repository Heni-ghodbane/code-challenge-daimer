import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { CenterMatrixService } from '../services/center-matrix.service';

@Controller('center-matrix')
export class CenterMatrixController {
  constructor(private readonly ctrmService: CenterMatrixService) {}

  @Get('count')
  async count() {
    return this.ctrmService.count();
  }

  @Get()
  async locations() {
    return this.ctrmService.getLocations();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.ctrmService.findOne(id);
  }

  @Post()
  async insert(@Body() body: LocationDto) {
    const written = await this.ctrmService.insert(body);
    return written.raw;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: LocationDto) {
    const written = await this.ctrmService.update(id, body);
    return written.raw;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.ctrmService.remove(id).then(() => ({message: `${id} successfull deleted`}));
  }
}
