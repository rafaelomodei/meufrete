import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
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

  @Index({ fulltext: true })
  @Column()
  originCity: string;

  @Index({ fulltext: true })
  @Column()
  destinationCity: string;

  @Index({ fulltext: true })
  @OneToOne(() => Company, { eager: true })
  @JoinColumn()
  originCompany: Company;

  @Index({ fulltext: true })
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
