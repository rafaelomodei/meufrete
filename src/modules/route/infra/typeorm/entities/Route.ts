import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Company } from '../../../../companies/infra/typeorm/entities/Company';

@Entity('routes')
class Route {
  @PrimaryColumn()
  id?: string;

  @Column()
  distance: number;

  @Column()
  originCity: string;

  @Column()
  destinationCity: string;

  @OneToOne(() => Company, { eager: true })
  @JoinColumn()
  originCompany: Company;

  @OneToOne(() => Company, { eager: true })
  @JoinColumn()
  destinationCompany: Company;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Route };
