import { Injectable } from '@nestjs/common';
import { VouncherRepository } from '../vouncher.repository';
import { Vouncher } from 'src/domain/vouncher';

@Injectable()
export class GetVouncherUseCase {
  constructor(private vouncherRepository: VouncherRepository) {}

  async execute(): Promise<Vouncher[]> {
    const response = this.vouncherRepository.getAll();
    return response;
  }
}
