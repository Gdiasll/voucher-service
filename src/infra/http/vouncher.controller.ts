import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVouncherDto } from './dto/create-vouncher.dto';
import { CreateVouncherUseCase } from 'src/application/use-case/create-vouncher';
import { GetVouncherUseCase } from 'src/application/use-case/get-vouncher';
import { DeleteVouncherUseCase } from 'src/application/use-case/delete-vouncher';
import {
  UpdateVouncherDtoClass,
  UpdateVouncherSchema,
} from './dto/update-vouncher.dto';
import { ZodValidationPipe } from './pipe/zod-validation.pipe';
import { UpdateVouncherUseCase } from 'src/application/use-case/update-vouncher';

@Controller('/vouncher')
export class VouncherController {
  constructor(
    private createVouncherUseCase: CreateVouncherUseCase,
    private getVouncherUseCase: GetVouncherUseCase,
    private deleteVouncherUseCase: DeleteVouncherUseCase,
    private updateVouncherUseCase: UpdateVouncherUseCase,
  ) {}

  @Post('')
  create(@Body() dto: CreateVouncherDto) {
    return this.createVouncherUseCase.execute(dto);
  }

  @Get('')
  getAll() {
    return this.getVouncherUseCase.execute();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateVouncherSchema))
    dto: UpdateVouncherDtoClass,
  ) {
    return this.updateVouncherUseCase.execute({ id, ...dto });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteVouncherUseCase.execute({ id });
  }

  @Patch(':id/use')
  use() {}
}
