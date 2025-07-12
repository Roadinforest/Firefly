import { Test, TestingModule } from '@nestjs/testing';
import { FirefliesService } from './fireflies.service';

describe('FirefliesService', () => {
  let service: FirefliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirefliesService],
    }).compile();

    service = module.get<FirefliesService>(FirefliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
