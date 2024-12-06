import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  async create(produto: Produto): Promise<Produto> {
    return this.repository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Produto | undefined> {
    return this.repository.findOne({where:{id}});
  }

  async update(id: number, produto: Partial<Produto>): Promise<void> {
    await this.repository.update(id, produto);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
