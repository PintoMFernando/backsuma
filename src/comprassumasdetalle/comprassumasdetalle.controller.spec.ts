import { Test, TestingModule } from '@nestjs/testing';
import { ComprassumasdetalleController } from './comprassumasdetalle.controller';

describe('ComprassumasdetalleController', () => {
  let controller: ComprassumasdetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprassumasdetalleController],
    }).compile();

    controller = module.get<ComprassumasdetalleController>(ComprassumasdetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
