import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice')
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  first_name: string;

  @Column('varchar', { length: 50 })
  last_name: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 20 })
  phone: string;

  @Column('varchar', { length: 20 })
  company_name: string;

  @Column('date')
  effective_date: Date;

  @Column('varchar', { length: 20 })
  status: string;

  @Column('bool')
  primary_al: boolean;

  @Column('bool')
  primary_gl: boolean;

  @Column('bool')
  primary_el: boolean;

  @Column('bool')
  is_deleted: boolean;
}
