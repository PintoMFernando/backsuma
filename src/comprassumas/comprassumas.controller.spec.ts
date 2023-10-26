import { Test, TestingModule } from '@nestjs/testing';
import { ComprassumasController } from './comprassumas.controller';

describe('ComprassumasController', () => {
  let controller: ComprassumasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprassumasController],
    }).compile();

    controller = module.get<ComprassumasController>(ComprassumasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
