import { Test, TestingModule } from '@nestjs/testing';
import { PuntoventaactividadController } from './puntoventaactividad.controller';

describe('PuntoventaactividadController', () => {
  let controller: PuntoventaactividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntoventaactividadController],
    }).compile();

    controller = module.get<PuntoventaactividadController>(PuntoventaactividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
