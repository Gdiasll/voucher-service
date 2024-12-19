import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';
import { statusEnum } from 'src/domain/vouncher';

export const UpdateVouncherSchema = z.object({
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

export type UpdateVouncherDto = z.infer<typeof UpdateVouncherSchema>;

export class UpdateVouncherDtoClass {
  @ApiProperty({ required: false })
  expiresIn?: Date;

  @ApiProperty({ required: false, enum: statusEnum })
  status?: statusEnum;
}
