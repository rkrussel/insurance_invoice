import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEntity } from './models/invoice.entity';
import { InvoiceService } from './services/invoice.service';
import { InvoiceController } from './controllers/invoice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity])],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
