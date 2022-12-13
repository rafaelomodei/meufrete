import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Column,
  JoinTable,
  ManyToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../../../../accounts/infra/typeorm/entities/User';
import { Load } from '../../../../loads/infra/typeorm/entities/Load';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  certification: boolean;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  user?: User;

  @ManyToMany(() => Load, { eager: true, cascade: true })
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
