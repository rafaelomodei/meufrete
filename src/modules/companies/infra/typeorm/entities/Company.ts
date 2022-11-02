import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Column,
  JoinTable,
  OneToMany,
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

  @ManyToMany((type) => Load, { eager: true })
  @JoinTable()
  listLoads: Load[];

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Company };
