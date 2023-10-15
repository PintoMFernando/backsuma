import { Test, TestingModule } from '@nestjs/testing';
import { CentralizadormesController } from './centralizadormes.controller';

describe('CentralizadormesController', () => {
  let controller: CentralizadormesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentralizadormesController],
    }).compile();

    controller = module.get<CentralizadormesController>(CentralizadormesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
