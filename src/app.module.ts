import { Module } from '@nestjs/common';
import { VouncherModule } from './application/vouncher.module';

@Module({
  imports: [VouncherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
