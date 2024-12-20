import { Injectable, NotFoundException } from '@nestjs/common';
import { VoucherRepository } from '../voucher.repository';
import { Voucher } from 'src/domain/voucher';

interface DeleteVoucherUseCaseCommand {
  id: string;
}

@Injectable()
export class DeleteVoucherUseCase {
  constructor(private voucherRepository: VoucherRepository) {}

  async execute({ id }: DeleteVoucherUseCaseCommand): Promise<Voucher> {
    const voucher = await this.voucherRepository.getById(id);
    if (!voucher) throw new NotFoundException('Voucher not found');
    await this.voucherRepository.delete(id);
    return voucher;
  }
}
