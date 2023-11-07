import { Test, TestingModule } from '@nestjs/testing';
import { PuntoventaactividadService } from './puntoventaactividad.service';

describe('PuntoventaactividadService', () => {
  let service: PuntoventaactividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntoventaactividadService],
    }).compile();

    service = module.get<PuntoventaactividadService>(PuntoventaactividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
