import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testetecnicoagsistemas',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProdutosModule,
  ],
})
export class AppModule {}
