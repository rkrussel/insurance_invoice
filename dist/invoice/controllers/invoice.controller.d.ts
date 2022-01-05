import { Observable } from 'rxjs';
import { InvoiceDto } from '../models/invoiceDto';
import { InvoiceService } from '../services/invoice.service';
export declare class InvoiceController {
    private invoiceService;
    constructor(invoiceService: InvoiceService);
    findAll(): Observable<InvoiceDto[]>;
    findOne(id: number): Observable<InvoiceDto>;
    create(invoice: InvoiceDto): Observable<InvoiceDto>;
    update(id: number, invoice: InvoiceDto): Observable<import("typeorm").UpdateResult>;
    delete(id: number): Promise<Observable<import("typeorm").UpdateResult>>;
}
