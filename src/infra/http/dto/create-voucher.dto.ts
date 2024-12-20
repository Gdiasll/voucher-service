import { ApiProperty } from '@nestjs/swagger';

export class CreateVoucherDto {
  @ApiProperty({ required: true })
  expiresIn: Date;
}
