import { Test, TestingModule } from '@nestjs/testing';
import { EmpresadatosinicialesService } from './empresadatosiniciales.service';

describe('EmpresadatosinicialesService', () => {
  let service: EmpresadatosinicialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresadatosinicialesService],
    }).compile();

    service = module.get<EmpresadatosinicialesService>(EmpresadatosinicialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
