import { Test, TestingModule } from '@nestjs/testing';
import { CenterMatrixService } from './center-matrix.service';

describe('CenterMatrixService', () => {
  let service: CenterMatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CenterMatrixService],
    }).compile();

    service = module.get<CenterMatrixService>(CenterMatrixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
