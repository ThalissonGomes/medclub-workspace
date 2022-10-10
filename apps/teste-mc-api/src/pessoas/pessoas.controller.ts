import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasService } from './pessoas.service';

@Controller('pessoas')
export class PessoasController {
  constructor(private pessoasService: PessoasService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return await this.pessoasService.create(createPessoaDto);
  }

  @Get()
  async findAll() {
    return await this.pessoasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.pessoasService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePessoaDto: UpdatePessoaDto
  ) {
    return await this.pessoasService.update(updatePessoaDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.pessoasService.delete(id);
  }
}
