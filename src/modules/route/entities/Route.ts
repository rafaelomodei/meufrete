import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Route };
