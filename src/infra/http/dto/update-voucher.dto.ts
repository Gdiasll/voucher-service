import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';
import { statusEnum } from 'src/domain/voucher';

export const UpdateVoucherSchema = z.object({
  expiresIn: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      {
        message: 'expiresIn must be a valid date',
      },
    ),
  status: z
    .enum([statusEnum.ACTIVE, statusEnum.EXPIRED, statusEnum.USED])
    .optional(),
});

export type UpdateVoucherDto = z.infer<typeof UpdateVoucherSchema>;

export class UpdateVoucherDtoClass {
  @ApiProperty({ required: false })
  expiresIn?: Date;

  @ApiProperty({ required: false, enum: statusEnum })
  status?: statusEnum;
}
