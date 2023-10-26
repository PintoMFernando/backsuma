import { Test, TestingModule } from '@nestjs/testing';
import { VenatatalonarioController } from './venatatalonario.controller';

describe('VenatatalonarioController', () => {
  let controller: VenatatalonarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenatatalonarioController],
    }).compile();

    controller = module.get<VenatatalonarioController>(VenatatalonarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
