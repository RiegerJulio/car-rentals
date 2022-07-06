import CarCategoryModel from '../../model/CarCategoryModel';
import ICategryRepositoryDTO from '../DTOs/ICategoryRepositoryDTO';

export default interface ICategoryRepository {
  create({ name, description }: ICategryRepositoryDTO): void
  list(): CarCategoryModel[]
  findByName(name: string): CarCategoryModel
}
