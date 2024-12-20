import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VoucherRepository } from 'src/application/voucher.repository';
import { PrismaVoucherRepository } from './prisma/repositories/prisma-voucher.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: VoucherRepository,
      useClass: PrismaVoucherRepository,
    },
  ],
  exports: [PrismaService, VoucherRepository],
})
export class PersistenceModule {}
