import { Test, TestingModule } from '@nestjs/testing';
import { ArchivostalonarioelectronicoController } from './archivostalonarioelectronico.controller';

describe('ArchivostalonarioelectronicoController', () => {
  let controller: ArchivostalonarioelectronicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivostalonarioelectronicoController],
    }).compile();

    controller = module.get<ArchivostalonarioelectronicoController>(ArchivostalonarioelectronicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
