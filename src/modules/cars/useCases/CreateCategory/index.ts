import carCategoryRepository from "../../repositories/CarCategoryRepository";
import CreateCarCategoryController from "./CreateCarCategoryController";
import CreateCarCategoryService from "./CreateCarCategoryService";


const categoriesRepository = new carCategoryRepository();
const createCategoryService = new CreateCarCategoryService(categoriesRepository);
const createCategoryController = new CreateCarCategoryController(createCategoryService);

export { createCategoryController };