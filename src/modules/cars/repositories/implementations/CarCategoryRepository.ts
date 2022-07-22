import CarCategoryModel from "../../model/CarCategoryModel";
import ICarCategoryDTO from "../DTOs/ICarCategoryDTO";
import ICarCategoryRepository from "../Interfaces/ICarCategoryRepository";


export default class CarCategoryRepository implements ICarCategoryRepository {
  private categories: CarCategoryModel[];
  
  private static INSTANCE: CarCategoryRepository;

  constructor() {
    this.categories = [];
  }

  public static getInstance(): CarCategoryRepository {
    if (!CarCategoryRepository.INSTANCE) {
      CarCategoryRepository.INSTANCE = new CarCategoryRepository();
    }
    return CarCategoryRepository.INSTANCE;
  }

  create({ name, description }: ICarCategoryDTO): void {
    const category = new CarCategoryModel();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });
  
    this.categories.push(category);
  }

  findByName(name: string): CarCategoryModel {
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  list(): CarCategoryModel[] {
    return this.categories;
  }
}

