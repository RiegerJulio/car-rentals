import CarCategoryRepository from "../../../repositories/implementations/CarCategoryRepository";
import CarCategoryController from "./CreateCarCategoryController";
import CarCategoryService from "./CreateCarCategoryService";


const carCategoriesRepository = CarCategoryRepository.getInstance();
const createCarCategoryService = new CarCategoryService(carCategoriesRepository);
const createCarCategoryController = new CarCategoryController(createCarCategoryService);

export { createCarCategoryController };