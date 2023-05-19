import { Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';

@Module({
  providers: [RouterService],
  controllers: [RouterController]
})
export class RouterModule {}
