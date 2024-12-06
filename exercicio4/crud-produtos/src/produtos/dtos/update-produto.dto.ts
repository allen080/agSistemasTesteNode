import { IsOptional, IsString, IsNumber, Min, MaxLength } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  nome?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  preco?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descricao?: string;
}
