import { Injectable, NotFoundException } from '@nestjs/common';
import { VouncherRepository } from '../vouncher.repository';
import { statusEnum, Vouncher } from 'src/domain/vouncher';

interface UpdateVouncherUseCaseCommand {
  id: string;
  expiresIn?: Date | null;
  status?: statusEnum | null;
}

@Injectable()
export class UpdateVouncherUseCase {
  constructor(private vouncherRepository: VouncherRepository) {}

  async execute({
    id,
    expiresIn,
    status,
  }: UpdateVouncherUseCaseCommand): Promise<Vouncher> {
    if (!expiresIn && !status) return;
    const vouncher = await this.vouncherRepository.getById(id);
    if (!vouncher) throw new NotFoundException('Vouncher not found');
    const payload = new Vouncher({ expiresIn, status, id });
    const updatedVouncher = await this.vouncherRepository.update(payload);
    return updatedVouncher;
  }
}
