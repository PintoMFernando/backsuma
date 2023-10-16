import { Test, TestingModule } from '@nestjs/testing';
import { PuntoventaController } from './puntoventa.controller';

describe('PuntoventaController', () => {
  let controller: PuntoventaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntoventaController],
    }).compile();

    controller = module.get<PuntoventaController>(PuntoventaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
