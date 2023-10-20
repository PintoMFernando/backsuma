import { Test, TestingModule } from '@nestjs/testing';
import { SumatalonarioController } from './sumatalonario.controller';

describe('SumatalonarioController', () => {
  let controller: SumatalonarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumatalonarioController],
    }).compile();

    controller = module.get<SumatalonarioController>(SumatalonarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
