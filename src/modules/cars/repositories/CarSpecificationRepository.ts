import CarSpecificationModel from "../model/CarSpecificationModel";
import ICarSpecificationDTO from "./DTOs/ICarSpecificationDTO";

export default class SpecificationsRepository {
  private specifications: CarSpecificationModel[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICarSpecificationDTO): void {
    const specification = new CarSpecificationModel();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);
  }

  findByName(name: string): CarSpecificationModel {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }

  list(): CarSpecificationModel[] {
    return this.specifications;
  }
  
}