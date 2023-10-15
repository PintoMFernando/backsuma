import { Test, TestingModule } from '@nestjs/testing';
import { CentralizadorService } from './centralizador.service';

describe('CentralizadorService', () => {
  let service: CentralizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentralizadorService],
    }).compile();

    service = module.get<CentralizadorService>(CentralizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
