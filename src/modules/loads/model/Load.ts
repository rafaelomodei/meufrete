import { v4 as uuid } from 'uuid';

class Load {
  id?: string;
  name: string;
  weight: number;
  createAt: Date;

  constructor() {
      if(!this.id){
          this.id = uuid();
      }
  }
}

export { Load };
