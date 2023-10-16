import { Test, TestingModule } from '@nestjs/testing';
import { PuntoventaService } from './puntoventa.service';

describe('PuntoventaService', () => {
  let service: PuntoventaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntoventaService],
    }).compile();

    service = module.get<PuntoventaService>(PuntoventaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
