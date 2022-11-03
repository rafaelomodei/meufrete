import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Load } from '../../../../loads/infra/typeorm/entities/Load';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  certification: boolean;

  @ManyToMany(() => Load, {eager: true})
  @JoinTable({
    name: 'companies_loads',
    joinColumns: [{ name: 'companyId' }],
    inverseJoinColumns: [{ name: 'loadId' }],
  })
  loads: Load[];

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Company };
