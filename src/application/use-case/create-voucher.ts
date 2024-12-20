import { Injectable } from '@nestjs/common';
import { VoucherRepository } from '../voucher.repository';
import { statusEnum, Voucher } from 'src/domain/voucher';

interface CreateVoucherUseCaseCommand {
  expiresIn: Date;
}

@Injectable()
export class CreateVoucherUseCase {
  constructor(private voucherRepository: VoucherRepository) {}

  async execute({ expiresIn }: CreateVoucherUseCaseCommand): Promise<Voucher> {
    const voucher = new Voucher({
      expiresIn,
      createdAt: new Date(),
      status: statusEnum.ACTIVE,
    });
    const response = await this.voucherRepository.create(voucher);
    return response;
  }
}
