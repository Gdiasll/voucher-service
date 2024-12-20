import { Injectable, NotFoundException } from '@nestjs/common';
import { VoucherRepository } from '../voucher.repository';
import { statusEnum, Voucher } from 'src/domain/voucher';

interface UpdateVoucherUseCaseCommand {
  id: string;
  expiresIn?: Date | null;
  status?: statusEnum | null;
}

@Injectable()
export class UpdateVoucherUseCase {
  constructor(private voucherRepository: VoucherRepository) {}

  async execute({
    id,
    expiresIn,
    status,
  }: UpdateVoucherUseCaseCommand): Promise<Voucher> {
    if (!expiresIn && !status) return;
    const voucher = await this.voucherRepository.getById(id);
    if (!voucher) throw new NotFoundException('Voucher not found');
    const payload = new Voucher({ expiresIn, status, id });
    const updatedVoucher = await this.voucherRepository.update(payload);
    return updatedVoucher;
  }
}
