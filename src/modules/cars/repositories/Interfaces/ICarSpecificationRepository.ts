import CarSpecificationModel from "../../model/CarSpecificationModel";
import ICarSpecificationDTO from "../DTOs/ICarSpecificationDTO";

export default interface ICarSpecificationRepository {
  create({ name, description }: ICarSpecificationDTO): void
  list(): CarSpecificationModel[]
  findByName(name: string): CarSpecificationModel
}