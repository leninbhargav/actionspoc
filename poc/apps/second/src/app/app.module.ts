import { Module } from '@nestjs/common';
import { OneApiModule } from '@poc/one-api';
import { TwoApiModule } from '@poc/two-api';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OneApiModule, TwoApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
