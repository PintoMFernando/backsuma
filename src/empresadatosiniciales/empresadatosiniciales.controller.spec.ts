import { Test, TestingModule } from '@nestjs/testing';
import { EmpresadatosinicialesController } from './empresadatosiniciales.controller';

describe('EmpresadatosinicialesController', () => {
  let controller: EmpresadatosinicialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresadatosinicialesController],
    }).compile();

    controller = module.get<EmpresadatosinicialesController>(EmpresadatosinicialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
