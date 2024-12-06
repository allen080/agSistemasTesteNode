import { IsNotEmpty, IsPositive, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  nome: string;

  @IsNotEmpty({ message: 'O preço é obrigatório.' })
  @IsPositive({ message: 'O preço deve ser um número positivo.' })
  @IsNumber({maxDecimalPlaces: 2})
  preco: number;

  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  @IsString({ message: 'A descrição deve ser uma string.' })
  descricao: string;
}
