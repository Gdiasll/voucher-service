import { Injectable } from '@nestjs/common';
import { VouncherRepository } from '../vouncher.repository';
import { statusEnum, Vouncher } from 'src/domain/vouncher';

interface CreateVouncherUseCaseCommand {
  expiresIn: Date;
}

@Injectable()
export class CreateVouncherUseCase {
  constructor(private vouncherRepository: VouncherRepository) {}

  async execute({
    expiresIn,
  }: CreateVouncherUseCaseCommand): Promise<Vouncher> {
    const vouncher = new Vouncher({
      expiresIn,
      createdAt: new Date(),
      status: statusEnum.ACTIVE,
    });
    const response = await this.vouncherRepository.create(vouncher);
    return response;
  }
}
