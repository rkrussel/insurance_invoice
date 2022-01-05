import { Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { InvoiceEntity } from '../models/invoice.entity';
import { InvoiceDto } from '../models/invoiceDto';
export declare class InvoiceService {
    private readonly invoiceRepository;
    constructor(invoiceRepository: Repository<InvoiceEntity>);
    createInvoice(invoice: InvoiceDto): Observable<InvoiceDto>;
    getInvoice(id: number): Observable<InvoiceEntity>;
    getAllInvoices(): Observable<InvoiceDto[]>;
    updateInvoice(id: number, invoice: InvoiceDto): Observable<UpdateResult>;
    deleteInvoice(id: number): Promise<Observable<UpdateResult>>;
}
