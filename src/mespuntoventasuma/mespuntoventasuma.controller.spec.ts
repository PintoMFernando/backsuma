import { Test, TestingModule } from '@nestjs/testing';
import { MespuntoventasumaController } from './mespuntoventasuma.controller';

describe('MespuntoventasumaController', () => {
  let controller: MespuntoventasumaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MespuntoventasumaController],
    }).compile();

    controller = module.get<MespuntoventasumaController>(MespuntoventasumaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
