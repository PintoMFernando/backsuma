import { Test, TestingModule } from '@nestjs/testing';
import { CentralizadormesService } from './centralizadormes.service';

describe('CentralizadormesService', () => {
  let service: CentralizadormesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentralizadormesService],
    }).compile();

    service = module.get<CentralizadormesService>(CentralizadormesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
