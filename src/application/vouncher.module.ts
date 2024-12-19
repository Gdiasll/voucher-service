import { Module } from '@nestjs/common';
import { VouncherController } from 'src/infra/http/vouncher.controller';
import { PersistenceModule } from 'src/infra/persistence/persistence.module';
import { CreateVouncherUseCase } from './use-case/create-vouncher';
import { GetVouncherUseCase } from './use-case/get-vouncher';
import { DeleteVouncherUseCase } from './use-case/delete-vouncher';
import { UpdateVouncherUseCase } from './use-case/update-vouncher';

@Module({
  imports: [PersistenceModule],
  controllers: [VouncherController],
  providers: [
    CreateVouncherUseCase,
    GetVouncherUseCase,
    DeleteVouncherUseCase,
    UpdateVouncherUseCase,
  ],
})
export class VouncherModule {}
