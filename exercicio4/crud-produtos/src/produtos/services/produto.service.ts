import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProdutoRepository } from '../repositories/produto.repository';
import { Produto } from '../entities/produto.entity';
import { CreateProdutoDto } from '../dtos/create-produto.dto';
import { UpdateProdutoDto } from '../dtos/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async criarProduto(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const { nome, preco } = createProdutoDto;

    if (!nome || nome.trim() === '') {
      throw new BadRequestException('O nome do produto não pode estar vazio.');
    }

    if (preco < 0) {
      throw new BadRequestException('O preço do produto não pode ser negativo.');
    }

    return this.produtoRepository.create(createProdutoDto as Produto);
  }

  async listarProdutos(): Promise<Produto[]> {
    return this.produtoRepository.findAll();
  }

  async obterProdutoPorId(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findById(id);
    if (!produto) {
      throw new NotFoundException('produto não encontrado.');
    }
    return produto;
  }

  async atualizarProduto(
    id: number,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<void> {
    const produto = await this.obterProdutoPorId(id);

    // Validação: Preço não pode ser negativo
    if (updateProdutoDto.preco !== undefined && updateProdutoDto.preco < 0) {
      throw new BadRequestException('preço do produto não pode ser negativo.');
    }

    await this.produtoRepository.update(produto.id, updateProdutoDto);
  }

  async deletarProduto(id: number): Promise<void> {
    const produto = await this.obterProdutoPorId(id);
    await this.produtoRepository.delete(produto.id);
  }
}
