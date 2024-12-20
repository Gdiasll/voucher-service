import { Entity } from 'src/core/entity';

export enum statusEnum {
  ACTIVE = 'ACTIVE',
  USED = 'USED',
  EXPIRED = 'EXPIRED',
}
export interface VoucherProps {
  id?: string;
  createdAt?: Date;
  expiresIn: Date;
  status: statusEnum;
}

export class Voucher extends Entity<VoucherProps> {
  constructor(props: VoucherProps) {
    super(props);
  }

  get id(): string {
    return this.props.id;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get expiresIn(): Date {
    return this.props.expiresIn;
  }

  get status(): statusEnum {
    return this.props.status;
  }
}
