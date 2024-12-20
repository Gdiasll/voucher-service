import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const CreateVoucherSchema = z.object({
  expiresIn: z
    .string()
    .refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      {
        message: 'expiresIn must be a valid date',
      },
    )
    .refine(
      (value) => {
        const date = new Date(value);
        return date > new Date();
      },
      {
        message: 'expiresIn must be a future date',
      },
    )
    .transform((value) => new Date(value)),
});

export type CreateVoucherDto = z.infer<typeof CreateVoucherSchema>;

export class CreateVoucherDtoClass {
  @ApiProperty({ required: true })
  expiresIn: Date;
}
