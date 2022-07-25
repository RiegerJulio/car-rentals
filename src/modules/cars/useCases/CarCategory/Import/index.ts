import CarCategoryRepository from "../../../repositories/implementations/CarCategoryRepository";
import ImportCarCategoryController from "./ImportCarCategoryController";
import ImportCarCategoryService from "./ImportCarCategoryService";

const carCategoryRepository = CarCategoryRepository.getInstance();
const importCarCategoryService = new ImportCarCategoryService(carCategoryRepository);
const importCarCategoryController = new ImportCarCategoryController(importCarCategoryService);

export { importCarCategoryController };