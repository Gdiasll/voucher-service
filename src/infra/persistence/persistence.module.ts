import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VouncherRepository } from 'src/application/vouncher.repository';
import { PrismaVouncherRepository } from './prisma/repositories/prisma-vouncher.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: VouncherRepository,
      useClass: PrismaVouncherRepository,
    },
  ],
  exports: [PrismaService, VouncherRepository],
})
export class PersistenceModule {}
