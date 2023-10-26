import { Test, TestingModule } from '@nestjs/testing';
import { ComprassumasService } from './comprassumas.service';

describe('ComprassumasService', () => {
  let service: ComprassumasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprassumasService],
    }).compile();

    service = module.get<ComprassumasService>(ComprassumasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
