import { Module } from '@nestjs/common';
import { VoucherController } from 'src/infra/http/vouncher.controller';
import { PersistenceModule } from 'src/infra/persistence/persistence.module';
import { CreateVoucherUseCase } from './use-case/create-voucher';
import { GetVoucherUseCase } from './use-case/get-voucher';
import { DeleteVoucherUseCase } from './use-case/delete-voucher';
import { UpdateVoucherUseCase } from './use-case/update-voucher';
import { UseVoucherUseCase } from './use-case/use-voucher';

@Module({
  imports: [PersistenceModule],
  controllers: [VoucherController],
  providers: [
    CreateVoucherUseCase,
    GetVoucherUseCase,
    DeleteVoucherUseCase,
    UpdateVoucherUseCase,
    UseVoucherUseCase,
  ],
})
export class VoucherModule {}
