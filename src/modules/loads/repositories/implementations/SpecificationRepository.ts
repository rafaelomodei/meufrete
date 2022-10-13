import { Specification } from '../../entities/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specificatin = new Specification();

    Object.assign(specificatin, { name, description, createdAt: new Date() });

    this.specifications.push();
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationRepository };
