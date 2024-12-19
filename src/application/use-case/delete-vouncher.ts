import { Injectable, NotFoundException } from '@nestjs/common';
import { VouncherRepository } from '../vouncher.repository';
import { Vouncher } from 'src/domain/vouncher';

interface DeleteVouncherUseCaseCommand {
  id: string;
}

@Injectable()
export class DeleteVouncherUseCase {
  constructor(private vouncherRepository: VouncherRepository) {}

  async execute({ id }: DeleteVouncherUseCaseCommand): Promise<Vouncher> {
    const vouncher = await this.vouncherRepository.getById(id);
    if (!vouncher) throw new NotFoundException('Vouncher not found');
    await this.vouncherRepository.delete(id);
    return vouncher;
  }
}
