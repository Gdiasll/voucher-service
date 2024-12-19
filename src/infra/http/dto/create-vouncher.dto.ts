import { ApiProperty } from '@nestjs/swagger';

export class CreateVouncherDto {
  @ApiProperty({ required: true })
  expiresIn: Date;
}
