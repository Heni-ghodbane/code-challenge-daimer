import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CenterMatrixService } from './services/center-matrix.service';
import { Location } from './location.entity';
import { CenterMatrixController } from './controller/center-matrix.controller';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Location])],
  controllers: [CenterMatrixController],
  providers: [CenterMatrixService],
  exports: [],
})
export class CenterMatrixModule {
}
