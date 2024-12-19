import { Vouncher } from 'src/domain/vouncher';

export abstract class VouncherRepository {
  abstract create(data: Vouncher): Promise<Vouncher>;
  abstract getAll(): Promise<Vouncher[]>;
  abstract update(data: Vouncher): Promise<Vouncher>;
  abstract delete(id: string): Promise<void>;
  abstract getById(id: string): Promise<Vouncher | null>;
}
