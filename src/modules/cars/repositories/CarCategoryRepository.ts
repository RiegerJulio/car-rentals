import CarCategoryModel from "../model/CarCategoryModel";
import ICategoryRepositoryDTO from "./DTOs/ICategoryRepositoryDTO";
import ICategoryRepository from "./Interfaces/ICategoryRepository";


export default class carCategoryRepository implements ICategoryRepository {
  private categories: CarCategoryModel[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryRepositoryDTO): void {
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

