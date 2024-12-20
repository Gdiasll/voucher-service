import { StatusEnum } from '@prisma/client';
import { Voucher } from 'src/domain/voucher';

export abstract class VoucherRepository {
  abstract create(data: Voucher): Promise<Voucher>;
  abstract getAll(): Promise<Voucher[]>;
  abstract update(data: Voucher): Promise<Voucher>;
  abstract delete(id: string): Promise<void>;
  abstract getById(id: string): Promise<Voucher | null>;
  abstract setStatus(id: string, status: StatusEnum): Promise<Voucher>;
}
