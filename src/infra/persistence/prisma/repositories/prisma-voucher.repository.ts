import { Injectable } from '@nestjs/common';
import { VoucherRepository } from 'src/application/voucher.repository';
import { PrismaService } from '../prisma.service';
import { Voucher } from 'src/domain/voucher';
import { PrismaVoucherMapper } from '../mapper/prisma-voucher-mapper';
import { StatusEnum } from '@prisma/client';

@Injectable()
export class PrismaVoucherRepository implements VoucherRepository {
  constructor(private prisma: PrismaService) {}

  async create(voucher: Voucher): Promise<Voucher> {
    const data = PrismaVoucherMapper.toPrisma(voucher);
    const entity = await this.prisma.voucher.create({ data });
    return PrismaVoucherMapper.toDomain(entity);
  }

  async getAll(): Promise<Voucher[]> {
    const vouchers = await this.prisma.voucher.findMany();
    return vouchers.map((item) => PrismaVoucherMapper.toDomain(item));
  }

  async delete(id: string): Promise<void> {
    await this.prisma.voucher.delete({ where: { id } });
  }

  async getById(id: string): Promise<Voucher | null> {
    const data = await this.prisma.voucher.findUnique({ where: { id } });
    if (!data) return null;
    return PrismaVoucherMapper.toDomain(data);
  }

  async update(voucher: Voucher): Promise<Voucher> {
    const data = PrismaVoucherMapper.toPrisma(voucher);
    const entity = await this.prisma.voucher.update({
      where: { id: voucher.id },
      data,
    });
    const updatedVoucher = PrismaVoucherMapper.toDomain(entity);
    return updatedVoucher;
  }

  async setStatus(id: string, status: StatusEnum): Promise<Voucher> {
    const entity = await this.prisma.voucher.update({
      where: { id },
      data: { status },
    });
    const updatedVoucher = PrismaVoucherMapper.toDomain(entity);
    return updatedVoucher;
  }
}
