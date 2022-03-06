import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Location as ILocation } from '@tss/common-ctrm';

@Entity()
export class Location implements ILocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  GSSN_OUTLETID: string;

  @Column()
  GSSN_COMPANYID: string;

  @Column({ default: null })
  vd_name: string;

  @Column({ default: null })
  vfnr: string;

  @Column({ default: null })
  vfnr_hb: string;

  @Column({ default: null })
  mode: string;

  @Column({ default: null })
  sortorder: string;

  @Column({ default: null })
  brand: string;

  @Column({ default: null })
  status: string;

  @Column({ default: null })
  shortcut: string;

  @Column({ default: null })
  company_name: string;

  @Column({ default: null })
  branch: string;

  @Column({ default: null })
  street: string;

  @Column({ default: null })
  zip: string;

  @Column({ default: null })
  place: string;

  @Column({ default: null })
  region: string;

  @Column({ default: null })
  phone: string;

  @Column({ default: null })
  website: string;

  @Column()
  center_name: string;
}
