import CarCategoryModel from "../../../model/CarCategoryModel";
import ICarCategoryRepository from "../../../repositories/Interfaces/ICarCategoryRepository";

export default class ListCarCategoryService {
  constructor(private carCategoryRepository: ICarCategoryRepository) {}

  public execute(): CarCategoryModel[] {
    const carCategories = this.carCategoryRepository.list();

    return carCategories;
    
  } 
}