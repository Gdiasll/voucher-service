import { Injectable } from '@nestjs/common';
import { VouncherRepository } from 'src/application/vouncher.repository';
import { PrismaService } from '../prisma.service';
import { Vouncher } from 'src/domain/vouncher';
import { PrismaVouncherMapper } from '../mapper/prisma-vouncher-mapper';

@Injectable()
export class PrismaVouncherRepository implements VouncherRepository {
  constructor(private prisma: PrismaService) {}

  async create(vouncher: Vouncher): Promise<Vouncher> {
    const data = PrismaVouncherMapper.toPrisma(vouncher);
    const entity = await this.prisma.vouncher.create({ data });
    return PrismaVouncherMapper.toDomain(entity);
  }

  async getAll(): Promise<Vouncher[]> {
    const vounchers = await this.prisma.vouncher.findMany();
    return vounchers.map((item) => PrismaVouncherMapper.toDomain(item));
  }

  async delete(id: string): Promise<void> {
    await this.prisma.vouncher.delete({ where: { id } });
  }

  async getById(id: string): Promise<Vouncher | null> {
    const data = await this.prisma.vouncher.findUnique({ where: { id } });
    if (!data) return null;
    return PrismaVouncherMapper.toDomain(data);
  }

  async update(vouncher: Vouncher): Promise<Vouncher> {
    const data = PrismaVouncherMapper.toPrisma(vouncher);
    const entity = await this.prisma.vouncher.update({
      where: { id: vouncher.id },
      data,
    });
    const updatedVouncher = PrismaVouncherMapper.toDomain(entity);
    return updatedVouncher;
  }
}
