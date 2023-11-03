import { Test, TestingModule } from '@nestjs/testing';
import { MespuntoventasumaService } from './mespuntoventasuma.service';

describe('MespuntoventasumaService', () => {
  let service: MespuntoventasumaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MespuntoventasumaService],
    }).compile();

    service = module.get<MespuntoventasumaService>(MespuntoventasumaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
