import { Module } from '@nestjs/common';
import { RationsService } from './rations.service';
import { RationsController } from './rations.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [RationsService],
  controllers: [RationsController]
})
export class RationsModule {}
