import { Test, TestingModule } from '@nestjs/testing';
import { OtrossumasService } from './otrossumas.service';

describe('OtrossumasService', () => {
  let service: OtrossumasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtrossumasService],
    }).compile();

    service = module.get<OtrossumasService>(OtrossumasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
