import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Produto> {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() produto: Partial<Produto>): Promise<Produto> {
    return this.produtosService.update(id, produto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.produtosService.delete(id);
  }
}