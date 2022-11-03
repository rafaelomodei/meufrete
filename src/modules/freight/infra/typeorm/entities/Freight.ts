import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Route } from '../../../../route/infra/typeorm/entities/Route';
import { Load } from '../../../../loads/infra/typeorm/entities/Load';

@Entity('freights')
class Freight {
  @PrimaryColumn()
  id?: string;

  @Column()
  price: number;

  @OneToOne(() => Route, { eager: true })
  @JoinColumn()
  route: Route;

  @ManyToOne(() => Load, () => Freight, { eager: true })
  @JoinColumn()
  load: Load;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Freight };
