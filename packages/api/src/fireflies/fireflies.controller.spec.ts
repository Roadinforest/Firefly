import { Test, TestingModule } from '@nestjs/testing';
import { FirefliesController } from './fireflies.controller';

describe('FirefliesController', () => {
  let controller: FirefliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirefliesController],
    }).compile();

    controller = module.get<FirefliesController>(FirefliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
