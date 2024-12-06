import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Middleware para garantir que a rota é protegida

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Rota para obter todos os usuários
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  // Rota para obter um usuário específico
  @UseGuards(JwtAuthGuard) // Protege a rota com o guard de JWT
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
