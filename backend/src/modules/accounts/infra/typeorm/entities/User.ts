import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Company } from '../../../../companies/infra/typeorm/entities/Company';
import { Freight } from '../../../../freight/infra/typeorm/entities/Freight';

@Entity('users')
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driverLicense?: string;

  @OneToOne(() => Company)
  company?: Company;

  @OneToMany(() => Freight, () => User, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  freight?: Freight[];

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
