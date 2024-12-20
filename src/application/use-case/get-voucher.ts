import { Injectable } from '@nestjs/common';
import { VoucherRepository } from '../voucher.repository';
import { Voucher } from 'src/domain/voucher';

@Injectable()
export class GetVoucherUseCase {
  constructor(private voucherRepository: VoucherRepository) {}

  async execute(): Promise<Voucher[]> {
    const response = this.voucherRepository.getAll();
    return response;
  }
}
