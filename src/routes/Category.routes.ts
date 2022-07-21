import { Router } from 'express';
import carCategoryRepository from '../modules/cars/repositories/CarCategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/CarCategory';


const categoryRoutes = Router();

const categoryRepository = new carCategoryRepository();

categoryRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return res.status(200).json(categoryRepository.list());
});

export default categoryRoutes;