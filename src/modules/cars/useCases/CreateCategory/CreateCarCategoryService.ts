import ICategoryRepository from "../../repositories/Interfaces/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCarCategoryService {
  constructor(private carCategoryRepository: ICategoryRepository) {}

  public execute({ name, description }: IRequest): void {
    const checkCategoryExistance = this.carCategoryRepository.findByName(name);

    if (checkCategoryExistance) {
      throw new Error("Category already exists");
    }

    this.carCategoryRepository.create({ name, description });
  } 
}