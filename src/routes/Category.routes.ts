import { Router } from 'express';
import multer from 'multer';
import { createCarCategoryController } from '../modules/cars/useCases/CarCategory/Create/';
import { listCarCategoriesController } from '../modules/cars/useCases/CarCategory/List';
import { importCarCategoryController } from '../modules/cars/useCases/CarCategory/Import/';


const categoryRoutes = Router();

const upload = multer({ dest: './tmp' });


categoryRoutes.post("/", (req, res) => {
  return createCarCategoryController.handle(req, res);
});

categoryRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCarCategoryController.handle(req, res);
})

categoryRoutes.get("/", (req, res) => {
  return listCarCategoriesController.handle(req, res);
});

export default categoryRoutes;