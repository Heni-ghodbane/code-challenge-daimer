import { Test, TestingModule } from '@nestjs/testing';
import { CenterMatrixController } from './center-matrix.controller';

describe('CenterMatrixController', () => {
  let controller: CenterMatrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CenterMatrixController],
    }).compile();

    controller = module.get<CenterMatrixController>(CenterMatrixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
