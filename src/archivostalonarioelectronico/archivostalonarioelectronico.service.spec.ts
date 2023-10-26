import { Test, TestingModule } from '@nestjs/testing';
import { ArchivostalonarioelectronicoService } from './archivostalonarioelectronico.service';

describe('ArchivostalonarioelectronicoService', () => {
  let service: ArchivostalonarioelectronicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchivostalonarioelectronicoService],
    }).compile();

    service = module.get<ArchivostalonarioelectronicoService>(ArchivostalonarioelectronicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
