import { CreateDateColumn, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  certification: boolean;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
      if(!this.id){
          this.id = uuid();
      }
  }
}

export { Company };
