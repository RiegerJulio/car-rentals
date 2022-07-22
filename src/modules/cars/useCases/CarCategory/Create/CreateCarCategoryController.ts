import { Request, Response } from "express";
import CarCategoryService from "./CreateCarCategoryService"

export default class CreateCarCategoryController {

  constructor(private createCategoryService: CarCategoryService) {}

  handle(req: Request, res: Response): Response {

    const { name, description } = req.body;
  
    this.createCategoryService.execute({ name, description });
  
    return res.status(201).json({ message: "Category created with success" });
  }
}