import { Test, TestingModule } from '@nestjs/testing';
import { ComprassumasdetalleService } from './comprassumasdetalle.service';

describe('ComprassumasdetalleService', () => {
  let service: ComprassumasdetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprassumasdetalleService],
    }).compile();

    service = module.get<ComprassumasdetalleService>(ComprassumasdetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
