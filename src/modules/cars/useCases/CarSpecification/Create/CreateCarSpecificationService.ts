import ICarSpecificationRepository from "../../../repositories/Interfaces/ICarSpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCarSpecificationService {
  constructor(private newCategoryRepository: ICarSpecificationRepository) {}

  public execute({ name, description }: IRequest): void {
    const checkCategoryExistance = this.newCategoryRepository.findByName(name);

    if (checkCategoryExistance) {
      throw new Error("Specification already exists");
    }

    this.newCategoryRepository.create({ name, description });
  }
}