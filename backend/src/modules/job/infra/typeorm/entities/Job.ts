import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../../../accounts/infra/typeorm/entities/User';
import { Freight } from '../../../../freight/infra/typeorm/entities/Freight';

@Entity('jobs')
class Job {
  @PrimaryColumn()
  id?: string;

  @Column()
  status: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  driver?: User;

  @OneToOne(() => Freight, { eager: true })
  @JoinColumn()
  freight: Freight;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Job };
