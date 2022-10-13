import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error('Specification already exists');

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
