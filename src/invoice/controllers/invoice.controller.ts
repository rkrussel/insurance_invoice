import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { InvoiceDto } from '../models/invoiceDto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  findAll(): Observable<InvoiceDto[]> {
    return this.invoiceService.getAllInvoices();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<InvoiceDto> {
    return this.invoiceService.getInvoice(id);
  }

  @Post()
  create(@Body() invoice: InvoiceDto): Observable<InvoiceDto> {
    return this.invoiceService.createInvoice(invoice);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() invoice: InvoiceDto) {
    return this.invoiceService.updateInvoice(id, invoice);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.invoiceService.deleteInvoice(id);
  }
}
