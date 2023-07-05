import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { webrtcMoudle } from './webrtc/webrtc.module';

@Module({
  imports: [webrtcMoudle],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
