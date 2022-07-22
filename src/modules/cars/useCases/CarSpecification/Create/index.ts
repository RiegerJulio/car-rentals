import CarSpecificationRepository from "../../../repositories/implementations/CarSpecificationRepository";
import CarSpecificationController from "./CreateCarSpecificationController";
import CarSpecificationService from "./CreateCarSpecificationService";


const carSpecificationRepository = CarSpecificationRepository.getInstance();
const createCarSpecificationService = new CarSpecificationService(carSpecificationRepository);
const createCarSpecificationController = new CarSpecificationController(createCarSpecificationService);

export { createCarSpecificationController };