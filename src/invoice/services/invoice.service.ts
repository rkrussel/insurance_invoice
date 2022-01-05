import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InvoiceEntity } from '../models/invoice.entity';
import { InvoiceDto } from '../models/invoiceDto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private readonly invoiceRepository: Repository<InvoiceEntity>,
  ) {}

  createInvoice(invoice: InvoiceDto): Observable<InvoiceDto> {
    return from(this.invoiceRepository.save(invoice));
  }

  getInvoice(id: number) {
    return from(this.invoiceRepository.findOne(id));
  }

  getAllInvoices(): Observable<InvoiceDto[]> {
    return from(this.invoiceRepository.find());
  }

  updateInvoice(id: number, invoice: InvoiceDto): Observable<UpdateResult> {
    return from(this.invoiceRepository.update(id, invoice));
  }

  async deleteInvoice(id: number) {
    const invoice = await this.invoiceRepository.findOne(id);
    invoice.is_deleted = true;
    return from(this.invoiceRepository.update(id, invoice));
  }
}
