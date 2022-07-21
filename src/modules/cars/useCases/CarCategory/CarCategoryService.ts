import ICarCategoryRepository from "../../repositories/Interfaces/ICarCategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CarCategoryService {
  constructor(private carCategoryRepository: ICarCategoryRepository) {}

  public execute({ name, description }: IRequest): void {
    const checkCategoryExistance = this.carCategoryRepository.findByName(name);

    if (checkCategoryExistance) {
      throw new Error("Category already exists");
    }

    this.carCategoryRepository.create({ name, description });
  } 
}