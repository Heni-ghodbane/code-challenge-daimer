import { Module } from '@nestjs/common';

import { CenterMatrixModule } from '@tss/ctrm-backend';
import { CoreModule } from '../core/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
   
    CoreModule,
    CenterMatrixModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
