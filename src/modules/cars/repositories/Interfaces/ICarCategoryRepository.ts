import CarCategoryModel from '../../model/CarCategoryModel';
import ICategoryDTO from '../DTOs/ICarCategoryDTO';

export default interface ICarCategoryRepository {
  create({ name, description }: ICategoryDTO): void
  list(): CarCategoryModel[]
  findByName(name: string): CarCategoryModel
}
