import { Injectable, NotFoundException } from '@nestjs/common';
import { Voucher, statusEnum } from 'src/domain/voucher';
import { VoucherRepository } from '../voucher.repository';

interface UseVoucherUseCaseCommand {
  id: string;
}

@Injectable()
export class UseVoucherUseCase {
  constructor(private voucherRepository: VoucherRepository) {}

  async execute({ id }: UseVoucherUseCaseCommand): Promise<Voucher> {
    const voucher = await this.voucherRepository.getById(id);
    if (!voucher) throw new NotFoundException('Voucher not found');
    const response = await this.voucherRepository.setStatus(
      id,
      statusEnum.USED,
    );
    return response;
  }
}
