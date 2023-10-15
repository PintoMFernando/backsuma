import { Test, TestingModule } from '@nestjs/testing';
import { CentralizadorController } from './centralizador.controller';

describe('DatosempresaController', () => {
  let controller: CentralizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentralizadorController],
    }).compile();

    controller = module.get<CentralizadorController>(CentralizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
