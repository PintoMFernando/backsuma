import { Test, TestingModule } from '@nestjs/testing';
import { SumatalonarioService } from './sumatalonario.service';

describe('SumatalonarioService', () => {
  let service: SumatalonarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumatalonarioService],
    }).compile();

    service = module.get<SumatalonarioService>(SumatalonarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
