import CarSpecificationModel from "../../model/CarSpecificationModel";
import ICarSpecificationDTO from "../DTOs/ICarSpecificationDTO";

export default class SpecificationsRepository {
  private specifications: CarSpecificationModel[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
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