import { IsNotEmpty, IsPositive, IsDecimal, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  nome: string;

  @IsNotEmpty({ message: 'O preço é obrigatório.' })
  @IsPositive({ message: 'O preço deve ser um número positivo.' })
  @IsDecimal({}, { message: 'O preço deve ter no máximo duas casas decimais.' })
  preco: number;

  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  @IsString({ message: 'A descrição deve ser uma string.' })
  descricao: string;
}
