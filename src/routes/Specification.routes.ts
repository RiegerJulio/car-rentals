import { Router } from 'express';
import { createCarSpecificationController } from '../modules/cars/useCases/CarSpecification/Create/';


const specificationRoutes = Router();


specificationRoutes.post("/", (req, res) => {
  return createCarSpecificationController.handle(req, res);
});

export default specificationRoutes;