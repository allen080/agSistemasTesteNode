import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { CreateProdutoDto } from '../dtos/create-produto.dto';
import { UpdateProdutoDto } from '../dtos/update-produto.dto';
import { Produto } from '../entities/produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async criarProduto(@Body() createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return this.produtoService.criarProduto(createProdutoDto);
  }

  @Get()
  async listarProdutos(): Promise<Produto[]> {
    return this.produtoService.listarProdutos();
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.obterProdutoPorId(id);
  }

  @Put(':id')
  async atualizarProduto(
    @Param('id') id: number,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ): Promise<void> {
    return this.produtoService.atualizarProduto(id, updateProdutoDto);
  }

  @Delete(':id')
  async deletarProduto(@Param('id') id: number): Promise<void> {
    return this.produtoService.deletarProduto(id);
  }
}
