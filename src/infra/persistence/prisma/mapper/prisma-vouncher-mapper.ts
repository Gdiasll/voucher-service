import { Prisma, Vouncher as PrismaVouncher } from '@prisma/client';
import { statusEnum, Vouncher } from 'src/domain/vouncher';

export class PrismaVouncherMapper {
  static toDomain(entity: PrismaVouncher): Vouncher {
    const model = new Vouncher({
      id: entity.id,
      createdAt: entity.createdAt,
      expiresIn: entity.expiresIn,
      status: statusEnum[entity.status as keyof typeof statusEnum],
    });
    return model;
  }

  static toPrisma(vouncher: Vouncher): Prisma.VouncherUncheckedCreateInput {
    return {
      createdAt: vouncher.createdAt,
      expiresIn: vouncher.expiresIn,
      status: vouncher.status,
    };
  }
}
