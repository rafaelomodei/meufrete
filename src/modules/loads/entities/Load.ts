import { CreateDateColumn, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('loads')
class Load {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  weight: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
      if(!this.id){
          this.id = uuid();
      }
  }
}

export { Load };
