import { Test, TestingModule } from '@nestjs/testing';
import { VenatatalonarioService } from './venatatalonario.service';

describe('VenatatalonarioService', () => {
  let service: VenatatalonarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenatatalonarioService],
    }).compile();

    service = module.get<VenatatalonarioService>(VenatatalonarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
