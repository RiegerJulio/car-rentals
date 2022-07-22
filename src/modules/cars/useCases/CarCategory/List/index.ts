import CarCategoryRepository from "../../../repositories/implementations/CarCategoryRepository";
import ListCarCategoriesController from "./ListCarCategoriesController";
import ListCarCategoryService from "./ListCarCategoriesService";

const carCategoriesRepository = CarCategoryRepository.getInstance();
const listCarCategoriesService = new ListCarCategoryService(carCategoriesRepository);
const listCarCategoriesController = new ListCarCategoriesController(listCarCategoriesService);

export { listCarCategoriesController };