import { Prisma, Voucher as PrismaVoucher } from '@prisma/client';
import { statusEnum, Voucher } from 'src/domain/voucher';

export class PrismaVoucherMapper {
  static toDomain(entity: PrismaVoucher): Voucher {
    const model = new Voucher({
      id: entity.id,
      createdAt: entity.createdAt,
      expiresIn: entity.expiresIn,
      status: statusEnum[entity.status as keyof typeof statusEnum],
    });
    return model;
  }

  static toPrisma(voucher: Voucher): Prisma.VoucherUncheckedCreateInput {
    return {
      createdAt: voucher.createdAt,
      expiresIn: voucher.expiresIn,
      status: voucher.status,
    };
  }
}
