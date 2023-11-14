import { Test, TestingModule } from '@nestjs/testing';
import { OtrossumasController } from './otrossumas.controller';

describe('OtrossumasController', () => {
  let controller: OtrossumasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtrossumasController],
    }).compile();

    controller = module.get<OtrossumasController>(OtrossumasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
