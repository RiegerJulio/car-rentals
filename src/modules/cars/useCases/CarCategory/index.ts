import carCategoryRepository from "../../repositories/CarCategoryRepository";
import CarCategoryController from "./CarCategoryController";
import CarCategoryService from "./CarCategoryService";


const categoriesRepository = new carCategoryRepository();
const createCategoryService = new CarCategoryService(categoriesRepository);
const createCategoryController = new CarCategoryController(createCategoryService);

export { createCategoryController };