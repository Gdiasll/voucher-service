import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateVoucherDtoClass,
  CreateVoucherSchema,
} from './dto/create-voucher.dto';
import { CreateVoucherUseCase } from 'src/application/use-case/create-voucher';
import { GetVoucherUseCase } from 'src/application/use-case/get-voucher';
import { DeleteVoucherUseCase } from 'src/application/use-case/delete-voucher';
import {
  UpdateVoucherDtoClass,
  UpdateVoucherSchema,
} from './dto/update-voucher.dto';
import { ZodValidationPipe } from './pipe/zod-validation.pipe';
import { UpdateVoucherUseCase } from 'src/application/use-case/update-voucher';
import { UseVoucherUseCase } from 'src/application/use-case/use-voucher';

@Controller('/voucher')
export class VoucherController {
  constructor(
    private createVoucherUseCase: CreateVoucherUseCase,
    private getVoucherUseCase: GetVoucherUseCase,
    private deleteVoucherUseCase: DeleteVoucherUseCase,
    private updateVoucherUseCase: UpdateVoucherUseCase,
    private useVoucherUseCase: UseVoucherUseCase,
  ) {}

  @Post('')
  create(
    @Body(new ZodValidationPipe(CreateVoucherSchema))
    dto: CreateVoucherDtoClass,
  ) {
    return this.createVoucherUseCase.execute(dto);
  }

  @Get('')
  getAll() {
    return this.getVoucherUseCase.execute();
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(UpdateVoucherSchema))
    dto: UpdateVoucherDtoClass,
  ) {
    return this.updateVoucherUseCase.execute({ id, ...dto });
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteVoucherUseCase.execute({ id });
  }

  @Patch(':id/use')
  use(@Param('id', ParseUUIDPipe) id: string) {
    return this.useVoucherUseCase.execute({ id });
  }
}
