import { Module } from '@nestjs/common';
import { VoucherModule } from './application/voucher.module';

@Module({
  imports: [VoucherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
