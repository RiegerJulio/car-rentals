import { Router } from 'express';
import { createCarCategoryController } from '../modules/cars/useCases/CarCategory/Create/';
import { listCarCategoriesController } from '../modules/cars/useCases/CarCategory/List';


const categoryRoutes = Router();


categoryRoutes.post("/", (req, res) => {
  return createCarCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return listCarCategoriesController.handle(req, res);
});

export default categoryRoutes;